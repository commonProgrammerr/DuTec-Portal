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
      <TitleContainer isFocused={isFocused} isErrored={!!error}>
        {label && <label>{label}</label>}
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
          name={fieldName}
          onBlur={handleInputBlur}
        />

        {!!error && <FiAlertCircle className="error" />}
      </InputContainer>
    </Container>
  )
}

export default Input
