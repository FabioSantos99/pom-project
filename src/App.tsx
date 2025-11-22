
import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
  <>
  <Heading>Olá mundo!
    <button>
          <TimerIcon />
    </button>
  </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet, deserunt sint, delectus, at asperiores dolores cupiditate magni odit fugit error? Sed porro explicabo hic repudiandae magni nihil error veniam.</p>
    </>
  );
}