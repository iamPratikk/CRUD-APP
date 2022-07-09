import React from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function App() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  // console.log(task)
  
  const getTask= JSON.parse(localStorage.getItem('taskAdded'));
  useEffect(()=>{
    if(getTask== null){
      setTasks([]);
    }else{
      setTasks(getTask)
    }
  },[getTask])


  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new task!",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem('taskAdded', JSON.stringify([...tasks,newTask]));
  };

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    // setTasks(deleteTask);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        Swal.fire({
          timer: 1500,
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
        });
        setTasks(deleteTask);
      }else{

      }
    });
    localStorage.setItem('taskAdded',JSON.stringify(deleteTask));
  };

  const editTask = (id) => {
    const newData = tasks.filter((data) => {
      if (data.id === id) {
        setText(data.text)
        setDate(data.date)
        return (
          
          // ...data,
          // text: text,
          // date: day,
          // id: uuidv4(),
          data.id !==id
        );
      }
      return data.id !==id;
    });
    setTasks(newData);
    showAddTask(true);
  }
  // setTasks(newData)
  // Swal.fire({
  //   icon: "success",
  //   title: "yayy",
  //   text: "you have succesfully edited an existing task",
  //   showConfirmButton: false,
  //   timer: 1500,
  // })};

  // console.log(tasks);

  return (
    <>
      {
        <div className="container">
          <Header
            showForm={() => setShowAddTask(!showAddTask)}
            changeTextAndColor={showAddTask}
          />
          {showAddTask && <AddTask onSave={addTask} date={date} setDate={setDate} text={text} setText={setText} />}
          <h3>Number of Tasks: {tasks.length}</h3>
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
          ) : (
            "no Task found"
          )}
        </div>
      }
    </>
  );
}

export default App;
