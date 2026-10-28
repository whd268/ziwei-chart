import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function KLineIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 19.5h16"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M6.5 16.5V9.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M11.5 17.5V6.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M16.5 15.5V8.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="11"
        width="3"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x="10"
        y="8"
        width="3"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x="15"
        y="10"
        width="3"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M7 7.5c3.2-3.8 7.2-4 10.5-1.1"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.55}
      />
      <path
        d="M17.5 6.4h-3"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        opacity={0.55}
      />
      <path
        d="M17.5 6.4v3"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        opacity={0.55}
      />
    </svg>
  )
}

export function RadarIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8L12 3.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M12 7.5 16 9.9v4.2l-4 2.4-4-2.4V9.9l4-2.4Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        opacity={0.65}
      />
      <path
        d="M12 3.5v17M4.5 8l15 8M19.5 8l-15 8"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        opacity={0.45}
      />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  )
}
