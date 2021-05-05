import styled, { css } from 'styled-components'
import { Form as form } from '@unform/web'

export const MainPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-width: 88vw;
  min-width: 62vw;
  width: 78vw;
  gap: 1.6em;
  padding: 2.6em;
  background: ${props => props.theme.colors.preto};
  box-shadow: 0px 0px 15px rgb( 0, 0, 0, 0.6);
  border-radius: 0.276em;
  align-items: stretch;
  
  @media only screen and (max-width: 1000px) {
    font-size: 0.82em;
  }
  @media only screen and (max-width: 825px) {
    font-size: 0.7em;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.65em;
  }
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

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    .apresentation-card {
      min-width:  10em;
      width: 100%;
    };

    div {
      width: 100%;
      min-width:  10em;
    }
  }
`

export const MarkedText = styled.mark`
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

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`


export const Form = styled(form)<{ isLoading?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  width: 100%;
  min-width: 260px;
  padding: 1.53em 2em;
  overflow: hidden;
  background-color: ${props => props.theme.colors.azulEscuro};
  border-radius: 0.3em;

  * {
    margin: 0;
  }

  & > section {
    display: flex;
    padding: 0;
    margin: 0;
    align-items: flex-end;
    gap: 0.83em;
  }

  input[type="submit"] {
    border: 0;
    height: 2.7em;
    width: 100%;
    padding: 0 2em;
    font-size: 1.24em;
    border-radius: 0.28em;
    font-weight: 700;
    margin-top: 1.23em;
    align-self: center;
    color: ${props => props.theme.colors.azulEscuro};
    background: ${props => props.theme.colors.turquesa};
    transition: border background 0.2s;
    
    ${props => props.isLoading && css`
      animation: loading linear infinite;
      animation-duration: 1.2s;
    `}
    
    :hover{
      cursor: pointer;
      background-color: ${props => props.theme.colors.branco};
      
    }
  }

  @keyframes loading {
    ${props => {
      let out = ''
      const turquesa = props.theme.colors.turquesa
      const branco = props.theme.colors.branco
      for (let i = 0; i <= 50; i++) {
        out = out + `${i}% { background: linear-gradient(90deg, ${branco} ${i*2}%, ${turquesa} ${i * 6}%);}`
      }
      for (let i = 0; i <= 50; i++) {
        out = out + `${i + 50}% { background: linear-gradient(90deg, ${turquesa} ${i*2}%, ${branco} ${i * 6}%);}`
      }
      return css`${props => out}`
    }}
  }
`