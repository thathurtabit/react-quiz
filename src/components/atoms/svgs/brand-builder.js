import React from "react";
import styled, { keyframes } from "styled-components";

// SVG wrapper
const SVG = styled.svg`
  height: 200px;
  max-width: 100%;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpointSM}) {
    height: 225px;
  }
`;

// HoneyHex
const moveHex = keyframes`
  0% {
    transform: rotate(5deg) translateY(0);
  } 100% {
    transform: rotate(-5deg) translateY(-10px);
  }
`;

const HoneyHex = styled.path`
  animation: 1.5s ease-in-out 0s infinite alternate ${moveHex};
  position: relative;
  transform-box: fill-box;
  transform-origin: 50% 50%;
`;

// Hands
const moveHands = keyframes`
  0% {
    transform: rotate(3deg) translateY(0);
  } 100% {
    transform: rotate(-3deg) translateY(-5px);
  }
`;

const Hands = styled.path`
  animation: 1.5s ease-in-out 0s infinite alternate ${moveHands};
  position: relative;
  transform-box: fill-box;
  transform-origin: 50% 50%;
`;

const SvgBrandBuilder = props => (
  <SVG viewBox="0 0 1531.78 1484.38" {...props}>
    <defs>
      <clipPath id="a">
        <ellipse
          cx={775.86}
          cy={712.42}
          rx={590.64}
          ry={590.4}
          transform="rotate(-80 775.86 712.417)"
          fill="none"
        />
      </clipPath>
      <clipPath id="b">
        <path
          fill="none"
          d="M1099.07 565.6l-85.19-64.42-89.44 44.13-36.79 143.06 23.54 100.45 78 42.61 64.75-24.35 60.34-103.49-15.21-137.99z"
        />
      </clipPath>
      <clipPath id="c">
        <path
          fill="none"
          d="M1086.25 816.83l257.27 197.56 43.6 223.05-288.88 60.85-225.18-173.61 31.46-250.55 137.61-63.51 44.12 6.21z"
        />
      </clipPath>
      <clipPath id="d">
        <path
          fill="none"
          d="M1097.72 571.33l-92.76-70.15-97.39 48.05L867.51 705l25.64 109.38 84.93 46.4 70.5-26.52 65.7-112.68-16.56-150.25z"
        />
      </clipPath>
      <clipPath id="e">
        <path
          fill="none"
          d="M1086.25 816.83l257.27 197.56 43.6 223.05-288.88 60.85-225.18-173.61 31.46-250.55 58.26-63.35 123.47 6.05z"
        />
      </clipPath>
    </defs>
    <title>brand-builder</title>
    <circle cx={775.86} cy={712.66} r={590.4} fill="#5da87e" />
    <g clipPath="url(#a)">
      <path
        fill="#ddd6cc"
        d="M943.18 548.25l-138.15 563.04 147.32-85.69 53.6-378.67-62.77-98.68z"
      />
      <path
        fill="#f2eada"
        d="M952.37 542.57l-196.88 528.22 155.61-56.3 93.3-362.75-52.03-109.17z"
      />
      <path
        fill="#ddd6cc"
        d="M1046.62 589.7l373.32 469.42-218.09-17.63-200.88-332.46 45.65-119.33z"
      />
      <path
        fill="#f2eada"
        d="M1095.65 573.76l436.14 411.72-218.39 13.49-246.01-300.6 28.26-124.61z"
      />
      <path
        fill="#fcdf90"
        d="M1099.07 565.6l-85.19-64.42-89.44 44.13-36.79 143.06 23.54 100.45 78 42.61 64.75-24.35 60.34-103.49-15.21-137.99z"
      />
      <g clipPath="url(#b)" fill="#60553c">
        <path d="M1210.63 597.52l-397.6-7.7v76.43l397.6-11.56v-57.17zM1210.63 723.42l-397.6-7.71v76.43l397.6-11.56v-57.16z" />
      </g>
      <path
        fill="#fcdf90"
        d="M861.85 483.19l-17.62-60.34-11.73-78.57 16.5-92.97 58.09-37.25 142.96-8.35 119.47 71.3 7.07 59.09 5.53 36.3-43.16 125.52-88.24 51.46-95.89-9.31-92.98-56.88z"
      />
      <g clipPath="url(#c)">
        <path
          fill="#fcdf90"
          d="M1086.25 816.83l257.27 197.56 43.6 223.05-288.88 60.85-225.18-173.61 31.46-250.55 137.61-63.51 44.12 6.21z"
        />
        <path
          fill="#60553c"
          d="M1348.35 985.68l-325.36 340.21 66.59 61.26 308.57-355.66-49.8-45.81zM1258.46 904.46l-394.2 257.32 50.92 74.79 381.36-276.17-38.08-55.94zM1175.23 790.81L817.29 964.09l34.64 68.13 349.2-190.45-25.9-50.96z"
        />
      </g>
      <path
        fill="#f9db87"
        d="M422.76 698.37H140.92L0 942.45l140.92 244.08h281.84l140.92-244.08-140.92-244.08z"
      />
      <path
        fill="#b59b61"
        d="M1099.51 560.91L936.36 875l-37.26 10.92 173.28-340.5 27.13 15.49z"
      />
      <path
        fill="#f9ea95"
        d="M422.76 210.21H140.92L0 454.29l140.92 244.08h281.84l140.92-244.08-140.92-244.08z"
      />
      <path
        fill="#fcdf90"
        d="M662.11 956.28l25.85-43.85 54.77-5.09 31.09 28.9-53.71 33.06-58-13.02zM839.51 917.8l4.7-21.98 32.42-35.11 56.14 11.99 3.59 28.35-37.26 16.35-59.59.4z"
      />
      <circle cx={861.79} cy={287.18} r={29.14} fill="#fff" />
      <circle cx={849.35} cy={300.59} r={7.95} fill="#324915" />
      <circle cx={1143.13} cy={366.83} r={29.14} fill="#fff" />
      <circle cx={1125.54} cy={378.31} r={7.95} fill="#324915" />
      <path
        fill="#b59b61"
        d="M832.3 249.39l73.23 37.9v-19.27l-48.18-26.34-25.05 7.71zM1192.84 356.85l-81.83-10.09 10.88-15.9 54.63 5.48 16.32 20.51z"
      />
      <path
        fill="#e2c376"
        d="M886.316 399.812l2.416-7.992 193.34 58.446-2.417 7.992z"
      />
      <path
        fill="#e2c376"
        d="M1020.62 436.9l2.38 40.11 25.05 6.93 22.66-33.18-50.09-13.86z"
      />
      <path
        fill="#8c7438"
        d="M963.27 215.01L933.56 69.34 806.5 20.76l-15.81 22.12 13.79 8.28 11.11-15 5.16 3.82-14.58 19.68-24.75-14.85 22.73-31.83 135 51.62 30.42 149.13-6.3 1.28zM1146.84 265.49l-6.12-1.96L1198.06 85l-34.23-74.79-17.35 14.05 2.47 12.91 18.25.55-.19 6.42-23.39-.7-4.18-21.75L1166.22 0l38.72 84.6-58.1 180.89z"
      />
      <path
        fill="none"
        stroke="#b59b61"
        strokeMiterlimit={10}
        strokeWidth={20}
        d="M944.72 1019.92l-48.76 452.1-65.61 2.36"
      />
    </g>
    <path
      fill="#ddd6cc"
      d="M943.18 548.25l-138.15 563.04 147.32-85.69 53.6-378.67-62.77-98.68z"
    />
    <path
      fill="#f2eada"
      d="M952.37 542.57l-196.88 528.22 155.61-56.3 93.3-362.75-52.03-109.17z"
    />
    <path
      fill="#ddd6cc"
      d="M1046.62 589.7l373.32 469.42-218.09-17.63-200.88-332.46 45.65-119.33z"
    />
    <path
      fill="#f2eada"
      d="M1095.65 573.76l436.14 411.72-218.39 13.49-246.01-300.6 28.26-124.61z"
    />
    <path
      fill="#fcdf90"
      d="M1099.07 565.6l-85.19-64.42-89.44 44.13-36.79 143.06 23.54 100.45 78 42.61 64.75-24.35 60.34-103.49-15.21-137.99z"
    />
    <g clipPath="url(#d)" fill="#bc9e61">
      <path d="M1219.19 606.08l-432.92-8.39v83.23l432.92-12.59v-62.25zM1219.19 743.16l-432.92-8.39V818l432.92-12.59v-62.25z" />
    </g>
    <path
      fill="#fcdf90"
      d="M861.85 483.19l-47.62-60.34 18.27-78.57 16.5-92.97 58.09-37.25 142.96-8.35 119.47 71.3 7.07 59.09 5.53 36.3-43.16 125.52-88.24 51.46-95.89-9.31-92.98-56.88z"
    />
    <g clipPath="url(#e)">
      <path
        fill="#fcdf90"
        d="M1066.79 802.78l276.73 211.61 43.6 223.05-288.88 60.85-225.18-173.61 31.46-250.55 49.26-63.35 113.01-8z"
      />
      <path
        fill="#b59d6d"
        d="M1348.35 985.68l-325.36 340.21 66.59 61.26 308.57-355.66-49.8-45.81zM1258.46 904.46l-394.2 257.32 50.92 74.79 381.36-276.17-38.08-55.94zM1175.23 790.81L817.29 964.09l34.64 68.13 349.2-190.45-25.9-50.96z"
      />
    </g>
    <path
      fill="#847049"
      d="M1099.51 560.91L936.36 875l-37.26 10.92 173.28-340.5 27.13 15.49z"
    />
    <HoneyHex
      fill="#ffeea9"
      d="M825.52 460.58l-274.18 65.27-80.57 270.07 193.61 204.82 274.18-65.27 80.57-270.08-193.61-204.81z"
    />
    <Hands
      fill="#e0bc63"
      d="M597.82 966.39l59.33-50.87 82.12 19.8 30.81 57.44-94.46 21.35-77.8-47.72zM812.84 969.03l7.14-33.43 49.3-53.39 85.36 18.24 5.46 43.11-56.66 24.85-90.6.62z"
    />
    <circle cx={854.57} cy={294.41} r={36.37} fill="#fff" />
    <circle cx={839.04} cy={311.14} r={9.92} fill="#324915" />
    <circle cx={1143.57} cy={374.41} r={36.37} fill="#fff" />
    <circle cx={1123.04} cy={386.14} r={9.92} fill="#324915" />
    <path
      fill="#b59b61"
      d="M832.3 249.39l73.23 37.9v-19.27l-48.18-26.34-25.05 7.71zM1192.84 356.85l-81.83-10.09 10.88-15.9 54.63 5.48 16.32 20.51z"
    />
    <path
      fill="#e2c376"
      d="M886.316 399.812l2.416-7.992 193.34 58.446-2.417 7.992z"
    />
    <path
      fill="#e2c376"
      d="M1020.62 436.9l2.38 40.11 25.05 6.93 22.66-33.18-50.09-13.86z"
    />
    <path
      fill="#8c7438"
      d="M964.42 215.01L940.14 95.95 836.28 56.24l-12.92 18.08 11.27 6.76 9.09-12.26 4.21 3.13-11.92 16.09-20.23-12.14 18.59-26.02 110.34 42.19 24.86 121.9-5.15 1.04zM1145.46 265.49l-4.98-1.6 46.7-145.4-27.88-60.92-14.13 11.45 2.02 10.52 14.86.44-.16 5.23-19.05-.57-3.4-17.71 21.81-17.67 31.54 68.9-47.33 147.33z"
    />
    <path
      fill="none"
      stroke="#b59b61"
      strokeMiterlimit={10}
      strokeWidth={20}
      d="M1142.4 1015.23l-12.61 392.06 62 9.49"
    />
  </SVG>
);

export default SvgBrandBuilder;
