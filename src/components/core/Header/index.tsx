import { Image } from '@components/ui';
import logo from '@assets/webp/logo.webp';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image width={182} height={80.88} src={logo} alt="Max Doctor" />
      <h4> A PLATAFORMA DE COMPRA DIRETA DO SEU ANESTÉSICO TÓPICO </h4>
    </Container>
  );
};

export default Header;
