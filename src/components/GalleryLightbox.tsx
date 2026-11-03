"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type GalleryImage = { src: string; alt: string };

type GalleryLightboxProps = {
  images: GalleryImage[];
  /** Shows one image per row instead of the default two. */
  singleColumn?: boolean;
  /** Number of images to show at first and add per click. Omit to show all images. */
  initialVisible?: number;
};

export default function GalleryLightbox({
  images,
  singleColumn = false,
  initialVisible,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialVisible ?? 0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const usesLoadMore = initialVisible !== undefined && images.length > initialVisible;
  const visibleImages = usesLoadMore ? images.slice(0, visibleCount) : images;
  const hasMore = usesLoadMore && visibleCount < images.length;

  const loadMore = () => {
    setVisibleCount((count) => Math.min(count + (initialVisible ?? 0), images.length));
  };

  const loadLess = () => {
    setVisibleCount(initialVisible ?? 0);
    // Return to the top of the gallery so the page doesn't jump past it.
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isOpen = index !== null;
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  // Keyboard controls + lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div
        ref={galleryRef}
        className={`mt-10 grid scroll-mt-24 gap-4 ${
          singleColumn ? "mx-auto max-w-5xl grid-cols-1" : "grid-cols-2"
        }`}
      >
        {visibleImages.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              singleColumn ? "aspect-[4/3]" : "aspect-[4/4]"
            }`}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes={
                singleColumn
                  ? "(max-width: 768px) 100vw, 768px"
                  : "(max-width: 768px) 50vw, 33vw"
              }
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {usesLoadMore && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={hasMore ? loadMore : loadLess}
            className="cursor-pointer rounded-full border border-current px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {hasMore ? "Load More" : "Load Less"}
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
            touchX.current = null;
          }}
        >
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
            aria-label="Close"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:left-6"
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:right-6"
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}