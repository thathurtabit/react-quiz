import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import personalityInfo from "../../api/personalityInfo";

const ElementsWrap = styled.section`
  margin: 0 auto;
  padding: 1rem;
`;

const PersonalityElementsUl = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const PersonalityElementsLi = styled.li`
  display: inline-block;
  font-size: 0.5rem;
  margin: 1rem;
  text-transform: uppercase;
  width: 95px;
  position: relative;

  &::before {
    content: "";
    height: 15px;
    left: 50%;
    position: absolute;
    top: -20px;
    transform: translate(-50%, 0) scale(1);
    transition: transform 0.25s ease-out;
    width: 15px;
  }

  &:hover::before {
    transform: translate(-50%, -5px) scale(1.5);
  }

  &.personality-diverge::before {
    background-color: ${props => props.theme.personality.diverge};
    -webkit-mask: url("../images/SVG/icons/diverge.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/diverge.svg") no-repeat 50% 50%;
  }

  &.personality-converge::before {
    background-color: ${props => props.theme.personality.converge};
    -webkit-mask: url("../images/SVG/icons/converge.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/converge.svg") no-repeat 50% 50%;
  }

  &.personality-abstract::before {
    background-color: ${props => props.theme.personality.abstract};
    -webkit-mask: url("../images/SVG/icons/abstract.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/abstract.svg") no-repeat 50% 50%;
  }

  &.personality-real::before {
    background-color: ${props => props.theme.personality.real};
    -webkit-mask: url("../images/SVG/icons/real.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/real.svg") no-repeat 50% 50%;
  }

  &.personality-individual::before {
    background-color: ${props => props.theme.personality.individual};
    -webkit-mask: url("../images/SVG/icons/individual.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/individual.svg") no-repeat 50% 50%;
  }

  &.personality-group::before {
    background-color: ${props => props.theme.personality.group};
    -webkit-mask: url("../images/SVG/icons/group.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/group.svg") no-repeat 50% 50%;
  }

  &.personality-sense::before {
    background-color: ${props => props.theme.personality.sense};
    -webkit-mask: url("../images/SVG/icons/sense.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/sense.svg") no-repeat 50% 50%;
  }

  &.personality-measure::before {
    background-color: ${props => props.theme.personality.measure};
    -webkit-mask: url("../images/SVG/icons/measure.svg") no-repeat 50% 50%;
    mask: url("../images/SVG/icons/measure.svg") no-repeat 50% 50%;
  }
`;

const PersonalityElementTitle = styled.h5`
  color: ${props => props.theme.tertiary};
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  margin: 0;
  padding: 0.75rem;

  span {
    display: block;
    color: ${props => props.theme.primary};
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1.25rem;
    letter-spacing: 0;
    padding: 0 0 0.5rem;
  }
`;

const ListPersonalityElements = props => {
  const resultKeyArray = Array.from(props.resultKey);
  const personalityKeys = Object.keys(personalityInfo);

  let filteredInfo = [];

  filteredInfo = personalityKeys.filter(personalityKey => {
    const infoFirstChar = personalityKey.charAt(0).toUpperCase();
    return resultKeyArray.includes(infoFirstChar);
  });

  const infoList = filteredInfo.map(infoKey => {
    const infoFirstChar = infoKey.charAt(0).toUpperCase();

    return (
      <PersonalityElementsLi className={`personality-${infoKey}`} key={infoKey}>
        <PersonalityElementTitle>
          <span>{infoFirstChar}</span>
          {personalityInfo[infoKey].name}
        </PersonalityElementTitle>
      </PersonalityElementsLi>
    );
  });

  return <PersonalityElementsUl>{infoList}</PersonalityElementsUl>;
};

export default function PersonalityElements(props) {
  return (
    <ElementsWrap>
      <ListPersonalityElements resultKey={props.resultKey} />
    </ElementsWrap>
  );
}

PersonalityElements.propTypes = {
  resultKey: PropTypes.string.isRequired
};

ListPersonalityElements.propTypes = {
  resultKey: PropTypes.string.isRequired
};
