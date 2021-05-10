import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 5.5vh;
  background-color: ${props => props.theme.colors.preto};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  align-items: center;
  padding: 1em 0.8rem;
  box-shadow: 0px 5px 7px rgb(0,0,0, 0.25);
  
  & > * {
    color: ${props => props.theme.colors.branco};
  }

  section {
    display: flex;
    margin-right: 12px;
    gap: 0.34em;
    justify-content: center;
    align-items: center;
    & > p {
      transform: translateY(-6%)
    }
  }
`
