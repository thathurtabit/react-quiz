import React from 'react';
import styled from 'styled-components';
import personalityInfo from '../../api/personalityInfo';

const Wrap = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 4rem auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 2rem 3rem 5rem;
  position: relative;

  @media screen and (min-width: 480px) {
    & > section {
      float: left;  
      width: 50%;
    }
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
  } 
`;

const List = styled.section`
  padding: 0;
`;

const PersonalitiesUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const PersonalitiesLi = styled.li`
  font-size: 13px;
`;

const ListPersonalities = (props) => {
  let resultKeyArray = Array.from(props.resultKey);
  let personalityKeys = Object.keys(personalityInfo);

  let filteredInfo = []

  filteredInfo = personalityKeys.filter((personalityKey) => {
    let infoFirstChar = personalityKey.charAt(0).toUpperCase();

    return resultKeyArray.includes(infoFirstChar)
  });

  let infoList = filteredInfo.map((infoKey) => {    
    return (
      <PersonalitiesLi key={infoKey}>
          <h4>{personalityInfo[infoKey].name}</h4>
          <p>{personalityInfo[infoKey][props.info]}</p>
      </PersonalitiesLi>
    )
  });

  return  <PersonalitiesUl>{ infoList }</PersonalitiesUl>
}

export default function PersonalityInfoList(props) {

  return (
    <Wrap>
      <List>
        <ListPersonalities resultKey={props.resultKey} info="overview" />
      </List>
      <List>
        <ListPersonalities resultKey={props.resultKey} info="insight" />
      </List>
    </Wrap>
  );
}

