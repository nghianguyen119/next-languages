import * as React from "react";
import type { SVGProps } from "react";
const SvgGb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 24"
    {...props}
  >
    <mask
      id="GB_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <path fill="#fff" d="M0 0h32v24H0z" />
    </mask>
    <g mask="url(#GB_svg__a)">
      <path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0z"
        clipRule="evenodd"
      />
      <mask
        id="GB_svg__b"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24h32V0z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#GB_svg__b)">
        <mask
          id="GB_svg__c"
          width={32}
          height={24}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h32v24H0z" />
        </mask>
        <g mask="url(#GB_svg__c)">
          <path
            fill="#fff"
            d="m-3.563 22.285 7.042 2.979 28.68-22.026 3.715-4.426-7.53-.995-11.698 9.491-9.416 6.396z"
          />
          <path
            fill="#F50100"
            d="M-2.6 24.372.989 26.1 34.54-1.599h-5.037l-32.102 25.97z"
          />
          <path
            fill="#fff"
            d="m35.563 22.285-7.042 2.979L-.159 3.238l-3.715-4.426 7.53-.995 11.698 9.491 9.416 6.396z"
          />
          <path
            fill="#F50100"
            d="m35.323 23.783-3.588 1.728-14.286-11.86-4.236-1.324-17.445-13.5H.806l17.434 13.18 4.631 1.588z"
          />
          <mask id="GB_svg__d" fill="#fff">
            <path
              fillRule="evenodd"
              d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z"
              clipRule="evenodd"
            />
          </mask>
          <path
            fill="#F50100"
            fillRule="evenodd"
            d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M12.222-2v-2h-2v2zm7.556 0h2v-2h-2zM12.222 8v2h2V8zM-1.972 8V6h-2v2zm0 8h-2v2h2zm14.194 0h2v-2h-2zm0 10h-2v2h2zm7.556 0v2h2v-2zm0-10v-2h-2v2zm14.25 0v2h2v-2zm0-8h2V6h-2zm-14.25 0h-2v2h2zm-7.556-8h7.556v-4h-7.556zm2 8V-2h-4V8zm-16.194 2h14.194V6H-1.972zm2 6V8h-4v8zm12.194-2H-1.972v4h14.194zm2 12V16h-4v10zm5.556-2h-7.556v4h7.556zm-2-8v10h4V16zm16.25-2h-14.25v4h14.25zm-2-6v8h4V8zm-12.25 2h14.25V6h-14.25zm-2-12V8h4V-2z"
            mask="url(#GB_svg__d)"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgGb;
