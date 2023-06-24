import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  right: 32px;
  align-items: center;
  height: 100px;
  width: 100px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? "flex" : "none"};

  &:hover {
    opacity: 1;
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        // width={125}
        // height={125}
        viewBox="0 0 132 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 164">
          <g id="color" filter="url(#filter0_d_6489_1996)">
            <rect x="32" y="28" width="68" height="68" rx="34" fill="white" />
          </g>
          <path
            id="Vector"
            d="M50.3883 68.6216C50.6422 68.8642 50.983 69 51.3379 69C51.6928 69 52.0336 68.8642 52.2875 68.6216L66.5 55.0678L80.7097 68.6216C80.9635 68.8642 81.3043 69 81.6592 69C82.0141 69 82.3549 68.8642 82.6088 68.6216C82.7326 68.5037 82.831 68.3627 82.8982 68.2069C82.9654 68.0512 83 67.8839 83 67.7148C83 67.5458 82.9654 67.3785 82.8982 67.2227C82.831 67.067 82.7326 66.926 82.6088 66.8081L67.4922 52.3948C67.2268 52.1417 66.8707 52 66.5 52C66.1293 52 65.7732 52.1417 65.5078 52.3948L50.3912 66.8081C50.2674 66.926 50.169 67.067 50.1018 67.2227C50.0346 67.3785 50 67.5458 50 67.7148C50 67.8839 50.0346 68.0512 50.1018 68.2069C50.169 68.3627 50.2674 68.5037 50.3912 68.6216L50.3883 68.6216Z"
            fill="#EF7C00"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6489_1996"
            x="0"
            y="0"
            width="132"
            height="132"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="16" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.0627451 0 0 0 0 0.239216 0 0 0 0.16 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6489_1996"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6489_1996"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;
