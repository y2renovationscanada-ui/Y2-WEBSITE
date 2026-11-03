"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Starting divider position, as a percentage from the left. */
  initialPosition?: number;
  className?: string;
};

const KEYBOARD_STEP = 5;

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const labelClass =
  "absolute top-3 rounded bg-black/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initialPosition = 50,
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(clamp(initialPosition));
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const moveTo = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) moveTo(event.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const nextPosition: Record<string, number> = {
      ArrowLeft: position - KEYBOARD_STEP,
      ArrowDown: position - KEYBOARD_STEP,
      ArrowRight: position + KEYBOARD_STEP,
      ArrowUp: position + KEYBOARD_STEP,
      Home: 0,
      End: 100,
    };

    if (event.key in nextPosition) {
      event.preventDefault();
      setPosition(clamp(nextPosition[event.key]));
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Compare before and after images"
      aria-orientation="horizontal"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% before image showing`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={handleKeyDown}
      // pan-y keeps vertical page scrolling working on touch screens.
      style={{ touchAction: "pan-y" }}
      className={`relative aspect-[5/3] w-full cursor-ew-resize select-none overflow-hidden rounded-xl bg-gray-100 shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-black/40 ${className}`}
    >
      {/* After image: sits underneath and fills the frame */}
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className={`${labelClass} right-3`}>After</span>

      {/* Before image: sits on top and is clipped at the divider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className={`${labelClass} left-3`}>Before</span>
      </div>

      {/* Divider and handle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 7l-5 5 5 5" />
            <path d="M15 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}