import { useState } from 'react';

export const ToDoList = () => {

    const [toDoList, setToDoList] = useState([]);
    const [task, setTask] = useState("");

    const displayTask = (event) => {
        setTask(event.target.value);
    }

    const addTask = () => {
        const newTask = {
            id: (toDoList.length === 0) ? 1 : (toDoList[toDoList.length - 1].id + 1),
            name: task,
            is_completed: false
        }
        setToDoList([...toDoList, newTask]);
        // console.log(`The evolution of toDoList[toDoList.length - 1].id - 1  =====> ${toDoList[toDoList.length - 1].id - 1}`);
        // console.log(toDoList[toDoList.length-1]);
    }

    const deleteTask = (doId) => {
        setToDoList(toDoList.filter((itemId, key) => itemId.id === doId ? false : true));
    }

    const completeTask = (taskId) => {
        console.log(`Task ID: ${taskId}`);
        // get the object with ID
        let this_object = undefined;
        for(let i=0; i<toDoList.length; i++) {
            if(toDoList[i].id === taskId) {
                this_object = toDoList[i];
            }
        }
        // get all the variables inside the object and create a new object with it
        const old_id = this_object.id;
        const old_name = this_object.name;
        const new_is_completed = true;
        const state_changed_obj = {
            id: old_id,
            name: old_name,
            is_completed: new_is_completed
        };
        // remove the existing object and insert this new object
        const newTodoList = toDoList.filter((obj, key) =>{
            return obj.id === taskId ? false : true;
        });
        
        // console.log(this_object);
        // console.log(state_changed_obj);
        // console.log([...newTodoList, state_changed_obj]);
        setToDoList([...newTodoList, state_changed_obj]);
    }

    return (
        <div>
            <input onChange={displayTask}></input>
            <button onClick={addTask}>Add task</button>
            <p>{task}</p>
            {toDoList.map((todos, keys) => {
                return (
                    <div>
                        <p>ID : {todos.id}</p>
                        <p>Name :{todos.name}</p>
                        <p>Is Completed :{todos.is_completed ? "True" : "False"}</p>
                        <button onClick={() => deleteTask(todos.id)}>Delete</button>
                        <button onClick={() => completeTask(todos.id)}>Complete</button>
                        <br />
                        =============================================================
                    </div>
                );
            })}
        </div>
    );
}



