// SourceIcons.tsx — monochrome source glyphs for Scene 6, panel 1.
//
// Inlined as React SVGs (not <Img>) so they inherit `color` via `currentColor`
// and can be tinted green/white per frame. Flat copies also live in
// public/sources/{store,pos,booking,subscription}.svg for external tooling.

import React from "react";

type IconProps = { size?: number; color?: string };

const wrap = (size: number, color: string, children: React.ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
  >
    {children}
  </svg>
);

// store / commerce — awning storefront
export const StoreIcon: React.FC<IconProps> = ({ size = 64, color = "#fff" }) =>
  wrap(
    size,
    color,
    <>
      <path d="M8 18 L10 8 H38 L40 18" />
      <path d="M8 18 C8 22 14 22 14 18 C14 22 20 22 20 18 C20 22 26 22 26 18 C26 22 32 22 32 18 C32 22 38 22 38 18 C38 22 40 22 40 18" />
      <path d="M10 22 V40 H38 V22" />
      <path d="M20 40 V30 H28 V40" />
    </>,
  );

// pos — point-of-sale terminal
export const PosIcon: React.FC<IconProps> = ({ size = 64, color = "#fff" }) =>
  wrap(
    size,
    color,
    <>
      <rect x={12} y={6} width={24} height={30} rx={3} />
      <line x1={12} y1={14} x2={36} y2={14} />
      <line x1={17} y1={22} x2={31} y2={22} />
      <line x1={17} y1={28} x2={26} y2={28} />
      <path d="M14 36 L10 42 H38 L34 36" />
    </>,
  );

// booking — calendar with a check
export const BookingIcon: React.FC<IconProps> = ({ size = 64, color = "#fff" }) =>
  wrap(
    size,
    color,
    <>
      <rect x={8} y={10} width={32} height={30} rx={3} />
      <line x1={8} y1={18} x2={40} y2={18} />
      <line x1={16} y1={6} x2={16} y2={13} />
      <line x1={32} y1={6} x2={32} y2={13} />
      <path d="M18 29 L22 33 L31 24" />
    </>,
  );

// subscription — recurring loop
export const SubscriptionIcon: React.FC<IconProps> = ({
  size = 64,
  color = "#fff",
}) =>
  wrap(
    size,
    color,
    <>
      <path d="M12 18 A14 14 0 0 1 38 14" />
      <polyline points="38,6 39,15 30,14" />
      <path d="M36 30 A14 14 0 0 1 10 34" />
      <polyline points="10,42 9,33 18,34" />
    </>,
  );

export const sourceIcons = [
  { key: "store", label: "Store", Icon: StoreIcon },
  { key: "pos", label: "POS", Icon: PosIcon },
  { key: "booking", label: "Booking", Icon: BookingIcon },
  { key: "subscription", label: "Subscription", Icon: SubscriptionIcon },
] as const;
