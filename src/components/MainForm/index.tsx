import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useState } from "react";

export function MainForm() {

  const [taskName, setTaskName] = useState('');

  // function handleClick() {
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       formattedSecondsRemaining: '21:00',
  //     };
  //   });
  // }

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu certo', taskName);
  }

  return (
     <form onSubmit={handleCreateNewTask} className='form' action="">
      {/* <button onClick={handleClick} type="button">Clicar</button> */}
      <div className='formRow'>
        <DefaultInput 
        labelText='task'
        id='meuInput' 
        type='text'
        placeholder='Digite algo'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
       
        />
      </div>

       <div className='formRow'>
        <p>Próximo intervalo é de 25</p>
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
  )
}