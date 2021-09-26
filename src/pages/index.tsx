import { FormHandles, SubmitHandler } from "@unform/core";
import { useCallback, useRef, useState } from "react";
import Input from "../components/Input";
import {
  MainPageContainer,
  Section,
  Subtitulo,
  Form,
  FormContainer,
  MarkedText,
} from "../styles/pages/mainPage";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";

interface FormData {
  name: string;
  email: string;
  UF: string;
  cidade: string;
  escola: string;
}

interface Errors {
  [key: string]: string;
}

function getValidationErrors(err: Yup.ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

async function submit(data: FormData) {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      UF: Yup.string().required(),
      cidade: Yup.string().required(),
      escola: Yup.string().required(),
    });
    await schema.validate(data, { abortEarly: false });

    return new Promise<void>((resolve, reject) => {
      fetch("/api/send", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status !== 200) {
            response.json().then((data) => reject(new Error(data.message)));
          } else {
            resolve();
          }
        })
        .catch(reject);
    });
  } catch (err) {
    return new Promise((resolve, reject) => reject(err));
  }
}

export default function Home() {
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToasts();
  const handleSubmit: SubmitHandler<FormData> = async (
    data,
    helpers,
    event
  ) => {
    try {
      event.preventDefault();
      formRef.current?.setErrors({});
      setIsLoading(true);
      await submit(data);
      helpers.reset();
      addToast('Enviado com sucesso!', {
        autoDismiss: true,
        appearance: "success"
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.error(err);
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        addToast('Parece que algo deu errado 😓.\nVocê pode tentar mais tarde ou entrar em contato por email!', {
          autoDismiss: true,
          appearance: "error"
        })
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainPageContainer>
      <div>
        <Subtitulo>Sobre:</Subtitulo>
        <Section>
          <img
            className="apresentation-card"
            src="/apresetation.svg"
            alt="card"
          />
          <div>
            <p>
              <MarkedText>
                {" "}
                <b>"Dutec"</b> é o software desenvolvido pela{" "}
                <a href="https://dulino.com.br">Dulino</a> para dar vida ao kit
                de rôbotica de mesmo nome, que tem como finalidade ensinar
                rôbotica e programação de maneira lúdica para crianças e
                adolecentes, ajudando-os a desenvolverem suas aptidões
                cognitivas e profissionais de maneira divertida e criativa.{" "}
              </MarkedText>
            </p>
          </div>
        </Section>
      </div>
      <div>
        <Subtitulo style={{ alignSelf: "flex-end" }}> Faça parte: </Subtitulo>
        <FormContainer>
          <p>
            <MarkedText>
              {" "}
              Atualmente o software Dutec está em sua etapa final de
              desenvolvimento. Se você deseja testar nosso produto, preencha o
              formulário ao lado com as informações requeridas, clique no botão
              de enviar e entraremos em contato com você em breve!{" "}
            </MarkedText>
          </p>
          <Form ref={formRef} isLoading={isLoading} onSubmit={handleSubmit}>
            <Input name="name" label="Nome Completo" />
            <Input name="email" type="email" label="Email" />
            <section>
              <Input name="UF" width="31%" label="UF" />
              <Input name="cidade" label="Cidade" />
            </section>
            <Input name="escola" label="Instituição de ensino" />

            <input type="submit" />
          </Form>
        </FormContainer>
      </div>
      <br />
    </MainPageContainer>
  );
}
