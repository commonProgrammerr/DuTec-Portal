import { SubmitHandler } from '@unform/core'
import { useCallback } from 'react'
import Input from '../components/Input'
import { MainPageContainer, Section, Subtitulo, Form, FormContainer, MarkedText } from '../styles/pages/mainPage'

export default function Home() {
  const handleSubmit = useCallback<SubmitHandler>((data, helpers, event) => {
    console.log(data, helpers, event)
  }, [])
  return (
    <MainPageContainer>
      <div>
        <Subtitulo>Sobre:</Subtitulo>
        <Section >
          <img className="apresentation-card" src="/apresetation.svg" alt="card" />
          <div>
            <p>
              <MarkedText> <b>"Dutec"</b> é o software desenvolvido pela <a href="https://dulino.com.br">Dulino</a> para dar vida ao kit de rôbotica de mesmo nome, que tem como finalidade ensinar rôbotica e programação de maneira lúdica para crianças e adolecentes, ajudando-os a desenvolverem suas aptidões cognitivas e profissionais de maneira divertida e criativa. </MarkedText>
            </p>
          </div>
        </Section>
      </div>
      <div>
        <Subtitulo> Faça parte: </Subtitulo>
        <FormContainer>
          <p>
            <MarkedText> Atualmente o software Dutec está em sua etapa final de desenvolvimento. Se você deseja testar nosso produto, preencha o formulario ao lado com as informações requerias e entraremos em contato com você em breve! </MarkedText>
          </p>
          <Form onSubmit={handleSubmit}>
            <Input name="email" label="Email" />
          </Form>
        </FormContainer>
      </div>
      <section></section>
    </MainPageContainer>
  )
}
