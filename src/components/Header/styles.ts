import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 9vh;
  background-color: ${props => props.theme.colors.azulEscuro};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  align-items: center;
  padding: 0 0.8rem;
  box-shadow: 0px 5px 7px rgb(0,0,0, 0.25);
  
  & > div.logo {
    height: 100%;
  }

  & > * {

    color: ${props => props.theme.colors.branco};
    &:last-child {
      display: flex;
      gap: 0.8em;
      margin-right: 12px;
      align-items: center;
      * {
        height: 100%;
        text-anchor: middle;
      }
    }

  }

`;
