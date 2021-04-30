import { Container } from './styles';

import { FiMail } from 'react-icons/fi'
import { useTheme } from 'styled-components';
import Img from 'next/image'

function Heading() {
  const { branco } = useTheme().colors
  return (
    <Container>
      <Img className="logo" src="/logo.svg" alt="DuTec" width="" height="80" />
      

      <section>
        Contato:
        <div>
          contato@dulino.com.br <FiMail color={branco} size="1em" />
        </div>
      </section>
    </Container>
  );
};

export default Heading;
