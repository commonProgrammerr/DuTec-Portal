import {
  useState,
  useCallback,
  InputHTMLAttributes,
  useRef,
  useEffect
} from 'react'
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi'

import { useField } from '@unform/core'

import { Container, TitleContainer, InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  hint?: string
}


function Input({
  name,
  label,
  hint,
  type,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    fieldName,
    registerField,
    defaultValue,
    error,
    clearError
  } = useField(name)

  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const handlechageVisibility = useCallback(() => setIsVisible(!isVisible), [
    isVisible
  ])
  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        path: 'value',
        ref: inputRef.current
      })
    }
  }, [registerField, fieldName])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)

    clearError()
  }, [clearError])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <Container {...rest}>
      <TitleContainer isFocused={isFocused} isErrored={!!error && !hint}>
        {label && <label>{label}</label>}
        {(hint || error) && <small>{error || hint}</small>}
      </TitleContainer>

      <InputContainer
      
        isFocused={isFocused}
        isErrored={!!error}
        onFocus={handleInputFocus}
      >
        <input
          {...rest}
          defaultValue={defaultValue}
          placeholder={!error ? rest.placeholder : 'Campo obrigatório!'}
          ref={inputRef}
          type={type !== 'password' ? type : isVisible ? 'text' : 'password'}
          onBlur={handleInputBlur}
        />

        {!!error && <FiAlertCircle className="error" />}
        {!!(type === 'password') &&
          (isVisible ? (
            <FiEyeOff onClick={handlechageVisibility} />
          ) : (
            <FiEye onClick={handlechageVisibility} />
          ))}
      </InputContainer>
    </Container>
  )
}

export default Input
