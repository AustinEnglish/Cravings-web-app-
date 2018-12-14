import { ADDTASK,ADDUSER} from '../constants'



export const addTask = task => ({ 
  type: ADDTASK, 
  task 
});


export const addUser = user => ({ 
  type: ADDUSER, 
  user 
});

