import TaskCard from "./taskCard/taskCard.component";

import './taskCollection.style.scss';

const COLLECTION_TYPES = {
    open: "task_collection_container",
    completed: "completed_task_collection_style"
}

const TaskCollection = ({tasksList, collectionType}) =>{

    console.log(COLLECTION_TYPES[collectionType])

    return(
        <div className={collectionType !== undefined? COLLECTION_TYPES[collectionType] : COLLECTION_TYPES['open']}>
            {
                tasksList.map((task,index) => {
                    return <TaskCard task={task} key={index} />
                })
            }
        </div>
    )
}

export default TaskCollection;