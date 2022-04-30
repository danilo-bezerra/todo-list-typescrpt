import { ITask } from "../../interfaces";
import "./styles.css";

interface IProps {
  task: ITask;
  onClick: any
}

function TodoTask({ task, onClick }: IProps) {
  return (
    <div className="card" id={String(task.id)}>
      <div>
        <p>{task.nameTask}</p>
      </div>

      <div className="line2">
        <span className="btn-card" onClick={() => onClick(task.id)}>
          X
        </span>
      </div>
    </div>
  );
}

export default TodoTask;
