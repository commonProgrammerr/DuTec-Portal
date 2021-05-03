import styled from 'styled-components'
import { Form as form } from '@unform/web'

export const MainPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-width: 88vw;
  min-width: 62vw;
  width: 78vw;
  gap: 1.6em;
  padding: 0 2.6em;
  min-height: 140vh;
  background: ${props => props.theme.colors.preto};
  box-shadow: 0px 0px 15px rgb( 0, 0, 0, 0.6);
  border-radius: 0.276em;
  align-items: stretch;
 
`

export const Section = styled.section`
  display: flex;
  gap: 0.8em;
  width: 100%;
  max-width: 78vw;
  

  .apresentation-card {
    width: 52%;
    min-width: 28em;
    max-height: 18.85em;
    object-fit: cover;
    border-radius: 0.276em;
  }
  p {
    align-self: center;
    margin: 0;
    text-align: justify; 
  }
  
  div {
    width: 48%;
    display: flex;
  }
`

export const MarkedText = styled.mark `
  font-size: 1.54em;
  line-height: 1.64em;
  text-align: justify; 
  color: ${props => props.theme.colors.azulEscuro};
  padding: 0 0.38em;
  background-color: ${props => props.theme.colors.turquesa};
  font-weight: 700;
  
  * {
    color: inherit;
    font-weight: inherit;
  }
  a {
    color: ${props => props.theme.colors.branco} !important;
    font-weight: 600;
    font-style: italic;
  }
`

export const Subtitulo = styled.h1`
  color: ${props => props.theme.colors.turquesa};
  background-color: ${props => props.theme.colors.azulEscuro};
  width: fit-content;
  padding: 0 0.54em;
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(62%, 1fr) minmax(120px, 1fr);
  gap: 1.2em;
  

  p {
    text-align: justify;
  }
`


export const Form = styled(form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 260px;
  padding: 0.7em;
  height: 234px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.azulEscuro};
  border-radius: 0.3em;

`