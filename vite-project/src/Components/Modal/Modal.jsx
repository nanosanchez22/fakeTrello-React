import React, { useState } from 'react';
import './Modal.css';

function Modal({ onClose, onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState('');
  const [priority, setPriority] = useState('Low');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = () => {
    onAddTask({ title, description, assigned, priority, deadline });
    setTitle('');
    setDescription('');
    setAssigned('');
    setPriority('Low');
    setDeadline('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <header className="modal-header">
          <h3>Add Task</h3>
          <button className="close-modal-btn" onClick={onClose}>
            &times;
          </button>
        </header>
        <div className="modal-body">
          <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" placeholder="Assigned to" value={assigned} onChange={(e) => setAssigned(e.target.value)} />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </div>
        <footer className="modal-footer">
          <button onClick={handleSubmit}>Add Task</button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
