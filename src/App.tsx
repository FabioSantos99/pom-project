import './styles/global.css';
import './styles/theme.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';


export function App() {
  // Que todos os componentes que usam "numero"
  // Saibam das mudanças em seu valor.

  // Sempre que eu usar userState, nao vou usar atribuição diretamente
  // const  [numero, setNumero] = useState(() => {
  //   console.log('Lazy initialization');
  //   return 0;
  // });

  const [numero, setNumero] = useState(0);

  function handleClick() {
    //  setNumero(prevState => prevState + 1);
    setNumero(1);
    }

  return (
  <>
  <Heading>
    Número: {numero}
  </Heading>
  <button onClick={handleClick}>Aumenta</button>
  
  <Container>
    <Logo />
  </Container>

    <Container>
      <Menu/>
  </Container>

   <Container>
    <CountDown />
  </Container>

  <Container>
    <form className='form' action="">
      <div className='formRow'>
        <DefaultInput 
        labelText={numero.toString()} 
        id='meuInput' 
        type='text'
        placeholder='Digite algo'
       
        />
      </div>

       <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
     
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <button>Enviar</button>
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green'/>
      </div>
    </form>
    
  </Container>

  <Container>
    <Footer />
  </Container>
  </>
  );
}