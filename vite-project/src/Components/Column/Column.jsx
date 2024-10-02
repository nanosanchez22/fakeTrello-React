import React from "react";
import "./Column.css";

function Column({title , children}) {
    return(
        <>
            <article className="column">
                <header className="column-header">
                    <h2 className="column-title">{title}</h2>
                    <div className="column-buttons">
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                </header>
                <div className="column-content">
                    {children}
                </div>
                <footer>
                    <button className="add-task-button">+ Add a Task</button>   
                </footer>

            </article>
        </>
    );
}

export default Column;