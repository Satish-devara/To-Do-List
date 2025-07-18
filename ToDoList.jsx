import React from "react";
import {useState} from 'react';

function ToDoList(){
      const [tasks, setTasks] = useState(["Wake up at 7am", "Do daily needs"]);
      const [newTask, setNewTask] = useState("");  

      function addTask(){
            if(newTask.trim() !== " "){
            setTasks(t => [...t,newTask]);
            setNewTask("");
      }
      }

      function removeTask(index){
            const updatedTasks = tasks.filter((_,i) => i!== index);
            setTasks(updatedTasks);
      }

      function moveTaskUp(i){
            
            if(i > 0){
                  const updatedTasks = [...tasks];
            [[updatedTasks[i],updatedTasks[i-1]]] = 
            [[updatedTasks[i-1],updatedTasks[i]]];
            setTasks(updatedTasks);
            }
      }

      function moveTaskDown(i){
            
            if(i < tasks.length-1){
                  const updatedTasks = [...tasks];
            [[updatedTasks[i],updatedTasks[i+1]]] = 
            [[updatedTasks[i+1],updatedTasks[i]]];
            setTasks(updatedTasks);
            }

      }

      function enterTask(event){
            setNewTask(event.target.value);
      }

      return(
            <div className="To-Do-Container">
            <h2>To-Do List</h2>
            <p>Add your list</p>
            <input type="text" value={newTask} onChange={enterTask} placeholder="enter the task"/>
            <button className = "add"onClick={addTask}>Add</button>
            <ol>
                  {tasks.map((task,index) => 
                  <li 
                  key={index}>
                        <span className="text">{task} </span>
                        <button className="Delete" onClick={() => removeTask(index)}>Delete</button>
                        <button className = "Move-up" onClick={() => moveTaskUp(index)}>👆🏻</button>
                        <button className="Move-down" onClick={() => moveTaskDown(index)}>👇🏻</button>

                  </li>)}
            </ol>
            </div>
      )



}

export default ToDoList

