"use client";

import { useEffect, useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

export type BeforeAfterPair = {
  before: string;
  after: string;
  description: string;
};

type BeforeAfterCarouselProps = {
  pairs: BeforeAfterPair[];
  className?: string;
};

const imagePath = (name: string) => `/images/${name}.webp`;

const arrowButtonClass =
  "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/40";

export default function BeforeAfterCarousel({
  pairs,
  className = "",
}: BeforeAfterCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = pairs.length;

  const goTo = (index: number) => {
    setActiveIndex((index + count) % count);
  };

  // Load the neighbouring slides so they are ready when the visitor moves.
  useEffect(() => {
    if (count < 2) return;

    [activeIndex + 1, activeIndex - 1 + count].forEach((index) => {
      const pair = pairs[index % count];
      if (!pair) return;

      [pair.before, pair.after].forEach((name) => {
        const image = new Image();
        image.src = imagePath(name);
      });
    });
  }, [activeIndex, count, pairs]);

  if (count === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Before and after renovation projects"
      className={`mx-auto w-full max-w-4xl ${className}`}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {pairs.map(({ before, after, description }, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={before}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                aria-hidden={!isActive}
                // "invisible" also removes inactive sliders from the tab order.
                className={`w-full shrink-0 px-1 pb-3 pt-1 transition-[visibility] duration-500 motion-reduce:transition-none ${
                  isActive ? "visible" : "invisible"
                }`}
              >
                <BeforeAfterSlider
                  beforeSrc={imagePath(before)}
                  afterSrc={imagePath(after)}
                  beforeAlt={`Before ${description} by Y2 Design & Build in the GTA`}
                  afterAlt={`After ${description} by Y2 Design & Build in the GTA`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => goTo(activeIndex - 1)}
            className={arrowButtonClass}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="flex items-center">
            {pairs.map(({ before }, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={before}
                  type="button"
                  aria-label={`Go to project ${index + 1} of ${count}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(index)}
                  className="cursor-pointer rounded-full p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full transition-colors ${
                      isActive ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => goTo(activeIndex + 1)}
            className={arrowButtonClass}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        Showing project {activeIndex + 1} of {count}: {pairs[activeIndex]?.description}
      </p>
    </div>
  );
}