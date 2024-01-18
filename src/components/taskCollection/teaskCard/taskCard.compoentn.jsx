import './taskCard.style.scss'

const TaskCard = ({task, clickHandler}) =>{
    const {text, id, open, date} = task;

    return(
        <div className="task_card" onClick={clickHandler}>
            {text + ' ' + date }
        </div>
    )
}

export default TaskCard;