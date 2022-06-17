import React from "react";
import Swal from "sweetalert2";

function AddTask({onSave, text, setText, date, setDate}) {
  
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !date) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your task and date or close the form!",
      });
    } else if (!text && date) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your task!",
      });
    } else if (text && !date) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your date!",
      });
    } else {
      onSave({ text, date });
      
    }
    setText("");
    setDate("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="datetime-local"
          value={date}
          placeholder="Enter Date & Time"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="save task" />
    </form>
  );
}

export default AddTask;
