import React from "react";
import styled, { keyframes } from "styled-components";

// SVG wrapper
const SVG = styled.svg`
  height: 200px;
  max-width: 100%;
  position: relative;
  transform: translateX(-10%);

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    height: 225px;
  }
`;

// EYES
const moveEyeAnim = keyframes`
  0% {
    transform: translateX(-50%);
  } 100% {
    transform: translateX(50%);
  }
`;

const Eye = styled.circle`
  animation: 1s ease-in-out 0s infinite alternate ${moveEyeAnim};
  position: relative;
  transform-box: fill-box;
`;

// PEN
const movePenAnim = keyframes`
  0% {
    transform: translateX(-30%) rotate(0deg);
  } 100% {
    transform: translateX(70%) rotate(-10deg);
  }
`;

const Pen = styled.path`
  animation: 1s ease-in-out 0s infinite alternate ${movePenAnim};
  transform-origin: 100% 100%;
  transform-box: fill-box;
`;

// HAND
const moveHandAnim = keyframes`
  0% {
    transform: translateX(-10%);
  } 100% {
    transform: translateX(40%);
  }
`;

const Hand = styled.path`
  animation: 1s ease-in-out 0s infinite alternate ${moveHandAnim};
  transform-origin: 50% 100%;
  transform-box: fill-box;
`;

// Tail
const moveTailAnim = keyframes`
  0% {
    transform: rotate(0deg)
  } 100% {
    transform: rotate(2deg)
  }
`;

const Tail = styled.path`
  animation: 1s ease-in-out 0s infinite alternate ${moveTailAnim};
  transform-origin: 50% 100%;
  transform-box: fill-box;
`;

// Smoke
const moveSmokeAnim = keyframes`
  0% {
    opacity: 0.25;
    transform: scale(1) rotateY(0deg) translateX(15%);
  } 100% {
    opacity: 0.2;
    transform: scale(0.9) rotateY(180deg) translateX(-25%);
  }
`;

const Smoke = styled.path`
  animation: 5s ease-in-out 0s infinite alternate ${moveSmokeAnim};
  transform-origin: center bottom;
  transform-box: fill-box;
`;

const SvgExperimenter = props => (
  <SVG viewBox="0 0 1446.53 1357" {...props}>
    <title>experimenter</title>
    <g style={{ isolation: "isolate" }}>
      <circle cx={856.13} cy={706.52} r={590.4} fill="#ffa6b0" />
      <path
        fill="#565656"
        d="M502 1258.08l171-12.46-67 16.36 279-.39-265 22.97h381l-398 12.86 242 26.87-290-18.7 76 29.21-130-28.04L393 1357l39-53.74-345 25.7 300-37.39-387-3.5 384-14.41-321-15.97 321 4.68L276 1239l167 16.36 7-16.36 52 19.08z"
      />
      <Tail
        fill="#bcbccc"
        d="M1149.18 988.8l74.05-118.46 68.12-23.7 61.16-35.36 40.38-48.41v-83.35l-43.16-83.78-40.61-55.42 2.53-77.85L1380.2 366h27.92v30.46l-40.62 53.31-19.34 29.27 1.57 37.58 20.31 43.58 38.08 57.97 27.93 73.62v71.08l-38.08 68.54-60.08 46.54-87.16 27.08-38.08 48.23-35.54 68.54-27.93-33z"
      />
      <path
        fill="#9a9aa8"
        d="M796.8 1120.27l-64.14 41.03-12.16 31.97 28.84 14.6 75.41-12.51 64.98-31.28 8.68-29.19-101.61-14.62z"
      />
      <path
        fill="#aaaaba"
        d="M1015.97 1147.55l-32.09 62.78 4.64 25.48 79.09-9.68 53.58-53.75-12.93-57.82-6.13-21.76-86.16 54.75z"
      />
      <Pen
        fill="#484859"
        d="M613.857 361.504l9.386-4.526 47.177 97.852-9.387 4.525z"
      />
      <path
        fill="#dfdfe8"
        d="M829.61 413.85l110.4 40.83 59.52 40.83 3.48 619.92-42.05 45.87-145.94-18.76-75.06-79.23 14.59-544.17 75.06-105.29z"
      />
      <path
        fill="#f3f3ff"
        d="M1124.91 413.85l-120.76 40.83-65.1 40.83-3.8 619.92 45.99 45.87 159.63-18.76 82.1-79.23-15.96-544.17-82.1-105.29z"
      />
      <Hand
        fill="#7f7f87"
        d="M607.22 483.82l8.13-45.56 55.32-24.41 37.43 27.66v34.17l-18.71 29.29-31.73 11.39-50.44-32.54z"
      />
      <path
        fill="#484859"
        d="M681.096 193.076l182.78-40.99 3.041 13.563-182.78 40.99z"
      />
      <path
        fill="#a1a1af"
        d="M847.42 214.99l-42.8-68.8-7.82-53.14L818.5 44l44.67 15.25 42.02 50.58 48.68 78.25-16.99 29.27-89.46-2.36z"
      />
      <path
        fill="#cdcde0"
        d="M933.16 380.84l-141.77 29.19-84.1 1.39-45.87-26.41v-33.36l5.57-39.61 43.78-66.03 67.76-73.66 70.19-34.75h104.6l122.31 19.46 50.04 48.65 11.12 116.75 6.95 133.09-77.84 36.49-147.33 27.8-116.76 13.9 6.26-131.7 125.09-21.2z"
      />
      <Eye cx={748.91} cy={251.74} r={11.62} fill="#324915" />
      <Eye cx={892.38} cy={252.92} r={11.62} fill="#324915" />
      <path
        d="M1046.24 177.93l-5.15-11.93-86.85 32H683v39.6l33 34.82h61.91l30.83-28.13V210.8h19.55v27l36.95 34.59h68.59l34.5-27.9v-37.9zm-251.47 61l-22.64 20.65h-49.89l-25.37-26.8v-22h97.9zm159.59-.23l-25.83 20.88H871l-28.86-27V210.8h112.22z"
        fill="#484859"
      />
      <path
        fill="#cdcde0"
        d="M1012.09 195.76l17.65-80.39 34.63-43.61 56.06-19.09 25.4 43.58-4.18 66.82-20.06 91.42-36.82 8.44-72.68-67.17z"
      />
      <path
        fill="#484859"
        d="M655.17 367.63l9.73-21.19h29.19l12.86 21.19v22.25l-25.89 6.94-21.72-4.17-4.17-25.02z"
      />
      <path
        fill="#e1e1ef"
        d="M1051.17 202.52l16.58-75.53 33.94-31.47 22.46 20.86-23.71 108.01-49.27-21.87z"
      />
      <path
        fill="#fff"
        d="M961.78 490.13l-38.4 61.67-77.97-47.25-60.97-52.65 12.79-23.45 83.68 40.65 80.87 21.03z"
      />
      <path
        fill="#c3c3d1"
        d="M808.67 421.15l139.09-50.39 58.37 60.12 90.35 50.04-44.48 15.29-250.19 37.53 6.86-112.59z"
      />
      <path
        fill="#d7d7e0"
        d="M1010.17 530.69L947.5 580l15.59-96.69 47.08 47.38z"
      />
      <path
        fill="#cacae5"
        d="M985.29 804.78l-15.17-1.54-6.25-13.89 8.91-12.37 15.16 1.53 6.26 13.9-8.91 12.37z"
      />
      <path
        fill="#5f5f6b"
        d="M630.85 453.81h304.31l64.72 328.03H714.59l-83.74-328.03z"
      />
      <path
        fill="#fff"
        d="M630.85 453.81l-16.68 26.41v41.7l26.41 48.65 15.98 34.75 33.36 83.4 9.03 51.42-9.03 29.19h289.81l6.95-34.74-3.71-38.45-26.53-36.61-28.14-63.94-24.33-50.04-.69-40.31.69-37.53 31.28-13.9h-304.4z"
      />
      <path
        fill="#a9a9bf"
        d="M919.85 681.54l8.13-45.56 55.33-24.41 37.42 27.66v34.17l-18.71 29.29-31.73 11.39-50.44-32.54z"
      />
      <path
        fill="#fff"
        d="M963.34 482.48l42.1 61.68 85.48-47.26 66.85-52.64-14.03-23.46-91.74 40.66-88.66 21.02z"
      />
      <path
        fill="#a9a9bf"
        d="M1002.21 663.62l95.17-9.84 40.22 31.2-.8 37.35-108.46-16.61-36.17-9.89 10.04-32.21z"
      />
      <path
        fill="#fff"
        d="M1097.38 653.78l40.22 31.2-.8 37.35-38.78-5.4 35.92 36.12 55.51-20.47-11.74-73.12-55.53-24.27-24.8 18.59z"
      />
      <path
        fill="#cacae5"
        d="M985.29 1093.19l-15.17-1.53-6.25-13.9 8.91-12.37 15.16 1.54 6.26 13.9-8.91 12.36zM985.29 990.34l-15.17-1.54-6.25-13.9 8.91-12.36 15.16 1.53 6.26 13.9-8.91 12.37zM985.29 892.35l-15.17-1.54-6.25-13.9 8.91-12.36 15.16 1.53 6.26 13.9-8.91 12.37zM985.29 622l-15.17-1.53-6.25-13.9 8.91-12.37 15.16 1.53 6.26 13.9-8.91 12.37z"
      />
      <path
        fill="#f3f3ff"
        d="M1208.37 516.36l27.11 197.72-45.87 18.42 18.76-216.14z"
      />
      <Smoke
        fill="#484859"
        opacity={0.25}
        d="M471.96 1288l-45.92-97.37-26.55-108.44 21.57-212.46 41.49-119.5-27.1-126.15-35.96-101.8L358 424.91l24.89-225.73L436 104.01 426.04 0l32.64 79.67 13.28 85.2L436 252.29l-21.02 110.65 56.98 90.74L514 542.2l-55.32 99.59-65.83 119.5-14.93 161.56 94.04 56.43 13.27 122.82-22.68 66.39 9.41 119.51z"
      />
      <path
        d="M1213 723.11l22.49-9-27.11-197.72-1.08 12.49-.29-9.71-54.9-70.42 5.67-4.46-14-23.46-1.77.79-5.18-99.13-9.11-95.72 14-63.67 4.18-66.82-25.4-43.58-56.06 19.09-34.63 43.61-7.29 33.23-69.13-11h-30.92l-17.28-27.77-42-50.58L818.5 44l-21.7 49.05 7.82 53.14 6.3 10.12-28 13.87L681.1 193l1.87 8.33v36.27l19.63 20.74L667 312l-5.56 39.61V354l-6.26 13.63 4.17 25 21.72 4.17.6-.16 25.63 14.76 84.1-1.39 16.46-3.39L806.6 433l-9.37-4.55-12.79 23.45 2.21 1.91H708.1L630 452l-16 28 .17 41.92 26.41 48.65 16 34.75 33.36 83.4 9 51.42-9 29.19h21.46l3.19 12.51h32.92L740 1063.31l55 58.11-62.35 39.88-12.16 32 28.84 14.6 75.41-12.51 65-31.28 3.42-11.5 67.84 8.69 9.69-10.56 10.59 10.56 29.47-3.46-26.83 52.49 4.65 25.48 79.08-9.68 53.58-53.75-6-26.82 25.68-3 82.1-79.23zM755 198h-32.44l40.83-9.16zm-58.1 34.82v-22h46.29L710.77 246l-.57.86z"
        fill="#47e2bd"
        opacity={0.4}
      />
      <path
        fillOpacity={0.15}
        d="M1108 1120l69-98-146 65 118-98-139 33 134-157-160 82 174-156-196 113 99-135-99 51 38-38-8-88-56.75 59.05L963 640l-71 102 36-107-79 72 43-133-92 89 56-119-82 49 76-103-66 44 82.92-80H935l77-46-92 28 90-79-129 51 140-103-186 41 77.59-73.58L774 336l62.1-84.26L737 319l37-56-83 56 32.6-77.7L670 311l1.19-5.3-4.2 6.34-5.57 39.61v2.36l-6.25 13.62 4.17 25.02 21.72 4.17.6-.16 25.63 14.76 84.1-1.39 16.46-3.39L806.6 433l-9.37-4.55-12.79 23.45 2.21 1.91H708.1L632 453l-18 27 .17 41.92 26.41 48.65 15.98 34.75 33.36 83.4 9.03 51.42-9.03 29.19h21.48l3.19 12.51h32.92l-7.55 281.47 55.05 58.11-62.35 39.88-12.16 31.97 28.84 14.6 75.41-12.51 64.98-31.28 3.42-11.5 67.81 8.72 9.68-10.56 10.6 10.56 29.47-3.46-26.83 52.49 4.64 25.48 79.09-9.68 53.58-53.75-6-26.82 25.68-3.02 40.31-38.9L1199 1042l-91 78z"
      />
    </g>
  </SVG>
);

export default SvgExperimenter;
