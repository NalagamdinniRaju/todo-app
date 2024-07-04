import React, { useState } from 'react';
import { IoCheckmarkCircleOutline,IoCheckmarkCircle  } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../App.css"

function TaskItem({ task, deleteTask, editTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDelete = () => deleteTask(task.id);

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleEdit = (e) => setEditText(e.target.value);

  const submitEdit = () => {
    editTask(task.id, editText);
    toggleEdit();
  };

  const handleToggleComplete = () => toggleComplete(task.id);

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editText} 
            onChange={handleEdit} 
          />

          <button class="button-33" onClick={submitEdit}>Save</button>

        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <button className="icons-button" onClick={handleToggleComplete}>{
            task.completed  ? <IoCheckmarkCircle size={18} className="competed"/>:<IoCheckmarkCircleOutline size={18}/>}
            </button>
          <button className='icons-button' onClick={toggleEdit}><FaEdit size={18}/></button>
          <button className='icons-button' onClick={handleDelete}><MdDelete size={18}/></button>
        </>
      )}
    </li>
  );
}

export default TaskItem;