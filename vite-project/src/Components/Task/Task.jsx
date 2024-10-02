import React from "react";
import "./Task.css";

function Task( {title, description, assigned, priority, deadline} ) {

    return(
        <>
        <div className="task-container"> 

            <header className="task-header">
                <h3>{title}</h3>
                <div className="task-buttons">
                    <button className="edit-task-btn"><i className="edit-pencil"></i></button>
                    <button className="delete-task-btn"><i className="delete-cross"></i></button>
                </div>
            </header>
            <div className="task-content">
                <p className="task-info">{description}</p>
                <p className="task-info">Assigned to: {assigned}</p>
                <p className="task-info">Priority: {priority}</p>
                <p className="task-info">Deadline: {deadline}</p>
            </div>
                
        </div>
        
        
        </>
    );
    
}

export default Task;