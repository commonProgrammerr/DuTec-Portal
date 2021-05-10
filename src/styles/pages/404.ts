import styled from 'styled-components'


export const ImageContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6em;
  background-color: ${props => props.theme.colors.turquesa};

  img {
    align-self: stretch;
    padding: 17vh 8vw 0px 25vw; 
    border-radius: 0.72em;

  }

  h1 {
    font-size: 2.8em;
    line-height: 0.92em;
    font-weight: 700;
    border-top: 1.5px solid ${props => props.theme.colors.branco};
    padding-top: 0.4em;
    margin: 0;
    margin-top: -0.68em;
    margin-bottom: 2em;
  }
  mark {
    font-size: 1.72em;
    font-weight: 700;
    text-anchor: middle;
    text-decoration: underline;
    background-color: ${props => props.theme.colors.azulEscuro};
    padding: 0em 0.7em;
    line-height: 2em;
    color: ${props => props.theme.colors.turquesa};
    cursor: pointer;
  }

`