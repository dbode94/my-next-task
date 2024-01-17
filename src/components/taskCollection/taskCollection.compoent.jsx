import TASK_COLLECTION from "../../TASKS_LIST";

import './taskCollection.style.scss';

const clickHandler = (event) =>{
    console.log(event.target);
}

const TaskCollection = () =>{
    return(
        <div className="task_collection_container">
            {
                TASK_COLLECTION.map((task,index) => {
                    const {text, id, color, open, date} = task;

                    return open? <div className="task_card" key={index} onClick={clickHandler}>{text + ' ' + date }</div> : null
                })
            }
        </div>
    )
}

export default TaskCollection;