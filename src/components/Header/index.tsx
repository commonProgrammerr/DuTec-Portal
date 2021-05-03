import { Container } from './styles';

import { FiMail } from 'react-icons/fi'
import { useTheme } from 'styled-components';
import Img from 'next/image'


function Heading() {
  const { branco } = useTheme().colors
  const heigth = 32
  return (
    <Container >
      <Img className="logo" src="/logo.svg" alt="DuTec" width={3.38 * heigth} height={heigth} />
      <section>
        <FiMail color={branco} size="0.94em" />
        <p>contato@dulino.com.br</p>
      </section>
    </Container>
  );
};

export default Heading;
