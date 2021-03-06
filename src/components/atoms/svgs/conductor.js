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

// BATON
const moveBaton = keyframes`
  0% {
    transform: rotate(5deg);
  } 100% {
    transform: rotate(-5deg);
  }
`;

const Baton = styled.path`
  animation: 1s ease-in-out 0s infinite alternate ${moveBaton};
  position: relative;
  transform-box: fill-box;
  transform-origin: 50% 100%;
`;

const SvgConductor = props => (
  <SVG viewBox="0 0 1202.62 1562" {...props}>
    <defs>
      <clipPath id="a">
        <circle cx={590.4} cy={853.88} r={590.4} fill="#bdd6f9" />
      </clipPath>
    </defs>
    <title>conductor</title>
    <circle cx={590.4} cy={853.88} r={590.4} fill="#bdd6f9" />
    <g clipPath="url(#a)">
      <path
        fill="#898989"
        d="M218.32 1346l123-75 73-52 101 5 97-5 137 15 66 21 102 142-248 120-214 45-237-216z"
      />
    </g>
    <path
      fill="#545454"
      d="M443.34 482.51l-167.43 55.6-98.23-77.84-87.11 92.67 148.27 124.18 59.31 18.53 129.74-48.18 15.45-164.96z"
    />
    <path
      fill="#f5f7f7"
      d="M554.67 221.18l-54.95 155.68-56.61 105.65-88.26 150.13-6.66 185.34 54.95 135.3 73.27 229.83 34.97 46.33 43.29 9.27 43.3-33.36 54.95 53.75h46.62l29.97-75.99 14.99-38.93 39.97-177.93-108.24-439.26-19.98-339.18-101.58 33.37z"
    />
    <path
      fill="#545454"
      d="M554.67 198.94L581.32 45.1 589.64 0l91.59 143.33L720.32 200l-32.43 206.52 21.64 31.51 39.97 14.83 31.63 55.6 119.9 79.69 151.53-46.33 16.65 5.56 16.65 85.26-173.18 85.25-139.87-48.18 14.98 48.18 32.75 263.19 10.55 100.09 78.26 101.94-74.93-12.98-89.92-25.95-24.98-292.84-83.25-233.53-14.99 94.53-41.63 31.5-24.98-96.37v-131.6l51.62-129.74 13.32-113.06 1.67-64.87-41.63 12.98h-24.98v-22.24z"
    />
    <path
      fill="#d7dbdd"
      d="M165.17 477.92l-51.74-74.49H41.14l-11.12 59.31 50.04 61.16 48.04 9.01 37.07-54.99z"
    />
    <path
      fill="#e2eaed"
      d="M1069.18 547.38l35.21-57.46 16.68 43.25 81.56-43.25v87.73l-35.22 51.28-84.66-12.22-13.57-69.33z"
    />
    <circle cx={677.74} cy={201.52} r={31.52} fill="#fff" />
    <circle cx={689.42} cy={191.76} r={8.6} fill="#324915" />
    <Baton
      fill="#1a1a1a"
      d="M41.154 206.71l6.138-.716 25.931 222.413-6.138.716z"
    />
    <path
      fill="#baa68e"
      d="M511.3 1229.44l-96.38 20.39 64.87 27.8 86.49-7.41-11.74-31.51-43.24-9.27zM689.23 1245.51l96.37 20.38-64.87 27.8-86.49-7.41 11.74-31.51 43.25-9.26z"
    />
  </SVG>
);

export default SvgConductor;
