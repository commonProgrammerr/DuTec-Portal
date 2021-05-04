import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface InputContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.div<InputHTMLAttributes<HTMLInputElement>>`
  flex: 1;
  flex-direction: column;
  max-width: ${props => props.width || 'none'};
  &:first-child {
    margin: 0;
  }

  input {
    height: 2.25em;
    border-radius: 0.28em;
    width: 100%;
    border: 0;
    font-size: 1.24em;
    font-weight: 700;
    color: ${props => props.theme.colors.turquesa};
    background: transparent;
    flex: 1;
    
    :focus {
      outline: 0;
    }
    ::placeholder {
      color: ${({ theme }) => theme.colors.azulClaro}D0;
    }

    &:disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.cinzaGrafite}D0;
    }
  }
`

export const TitleContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* margin-bottom: 8px; */

  small {
    font-size: 0.6875em;
    line-height: 0.8125em;
    margin-left: 0.5em;
    ${props =>
    props.isErrored &&
    css`
        width: 100%;
        text-align: right;
        margin-bottom: 1px;
        color: ${props => props.theme.colors.red} !important;
      `
  }
  }

  label {
    display: block;
    ${props =>
    props.isFocused ?
      css`
        color: ${props => props.theme.colors.turquesa};
      ` : css`
      color: ${props => props.theme.colors.azulClaro}B0;
      `} 
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1.3em;
    letter-spacing: 0em;
    text-align: left;

  }
`

export const InputContainer = styled.span<InputContainerProps>`
  display: flex;
  align-items: center;

  height: 2.625em;
  border-radius: 0.28em;
  /* background: ${props => props.theme.colors.branco}; */
  border: 3px solid ${props => props.theme.colors.azulClaro}40;

  padding: 0 1em;

  transition: border 0.2s;

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-left: 0.5em;
    color: ${props => props.theme.colors.turquesa};
    cursor: pointer;

    &.error {
      cursor: default;
      color: ${props => props.theme.colors.red};
    }
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: ${props => props.theme.colors.red} !important;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 3px solid ${props => props.theme.colors.turquesa};
      /* background-color: ${props => props.theme.colors.branco}; */
      outline: 0;
    `}
`
