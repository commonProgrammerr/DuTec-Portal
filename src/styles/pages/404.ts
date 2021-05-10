import styled from 'styled-components'


export const ImageContainer = styled.div`
  display: flex;
  padding: 0;
  gap: 0;
  border-radius: 0.42em;
  flex-direction: column;
  background-color: ${props => props.theme.colors.turquesa};
  justify-content: center;
  padding-bottom: 1.54em;

  img {
    width: 94%;
    /* object-fit: cover; */
    transform: translateX(5.8%);
  }
  
  mark {
    margin: 0;
    margin-top: -2.05em;
    cursor: pointer;
    font-size: 1.72em;
    font-weight: 700;
    text-anchor: middle;
    text-decoration: underline;
    line-height: 2em;

    color: ${props => props.theme.colors.turquesa};
    background-color: ${props => props.theme.colors.azulEscuro};
    align-self: center;
    padding: 0em 0.7em;
    transform: translateY(-14%);
  }

`