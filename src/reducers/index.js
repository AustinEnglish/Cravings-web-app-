

import { ADDTASK,ADDUSER} from '../constants';


const initalState = {
    taskList: [
      {
        id: 0,
        dateCreated: '12/12/2018',
        task: 'wash the car'
      },
      {
        id: 1,
        dateCreated: '12/12/2018',
        task: 'sweep the house'
      },
      {
        id: 2,
        dateCreated: '12/12/2018',
        task: 'take out trash'
      },
      {
        id: 3,
        dateCreated: '12/12/2018',
        task: 'buy groceries'
      },
      {
        id: 4,
        dateCreated: '12/12/2018',
        task: 'do homework'
      },
      {
        id: 5,
        dateCreated: '12/12/2018',
        task: 'party'
      } 
    ],
    users: [
      {
        id: 0,
        name: 'User 1',
        tasks: []
      },
      {
        id: 1,
        name: 'Taylor',
        tasks: [
          {
            id: 0,
            dateCreated: '12/12/2018',
            task: 'teach the class'
          },
          {
            id: 1,
            dateCreated: '12/12/2018',
            task: 'teach github'
          }
        ]
      },
      {
        id: 1,
        name: 'Brian',
        tasks: [
          {
            id: 0,
            dateCreated: '12/12/2018',
            task: 'create lab'
          },
          {
            id: 1,
            dateCreated: '12/12/2018',
            task: 'create strech goals'
          }
        ]
      }
    ]
  }

const rootReducer = (state = initalState, action) => {
  switch (action.type) {

     case ADDTASK:

     //set id
      var newObject={};
      newObject.id = state.taskList.length;


      //get date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;


         newObject.dateCreated = today;

         newObject.task= action.task

         
         console.log(action.task)

      return  {
        ...state,
        taskList: [...state.taskList, newObject]
      }

    

    default:
      return state;
  }
}


export default rootReducer;