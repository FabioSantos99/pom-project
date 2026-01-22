import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel, 
  action: TaskActionModel,
): TaskStateModel {
  switch(action.type) {
    case TaskActionTypes.START_TASK: {
       // setState(prevState => {
    //   return {
    //     ...prevState,
    //     config: {...prevState.config},
    //     activeTask: newTask,
    //     currentCycle: nextCycle, // conferir
    //     secondsRemaining, // Conferir
    //     formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Conferir
    //     tasks: [...prevState.tasks, newTask],
    //   };
    // });

    const newTask = action.payload;
    const nextCycle = getNextCycle(state.currentCycle);
    const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      //     ...prevState,
    //     activeTask:null,
    //     secondsRemaining: 0,
    //     formattedSecondsRemaining: '00:00',
    //     tasks: prevState.tasks.map(task => {
    //       if (prevState.activeTask && prevState.activeTask.id === task.id) {
    //         // return { ...task, interruptDate: Date.now() }
    //         return task;
    //       }
    //       return task;
    //     }),
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() }
          }
          return task;
        }),
        
      };
    }
  }

  //Sempre deve retornar o estado
  return state;
}