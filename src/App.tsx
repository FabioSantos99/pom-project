import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
  <>
  <Heading>
    Testando Componente
  </Heading>
  <Container>
    <section>LOGO</section>
  </Container>

    <Container>
    <section>Menu</section>
  </Container>

    <Container>
    <section>Footer</section>
  </Container>

    <Container>
    <section>LOGO</section>
  </Container>
  
  </>
  );
}