import TaskCard from "./taskCard/taskCard.component";
import DeleteButton from "./deleteButton/deleteButton.component";

import './taskCollection.style.scss';

const COLLECTION_TYPES = {
    open: "task_collection_container",
    completed: " task_collection_container completed_task_collection_style"
}

const TaskCollection = ({tasksList, collectionType}) =>{

    return(
        <div className={collectionType !== undefined? COLLECTION_TYPES[collectionType] : COLLECTION_TYPES['open']}>
            {
                tasksList.map((task,index) => {
                    return (
                        <div className="task_item">
                            <TaskCard task={task} key={index}/>
                            <DeleteButton task={task} key={index+1}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskCollection;