import React, {useState, useEffect} from 'react'
import { listenEvent } from '@hc/utils'

interface ITask {
    id: number,
    describe: string
}

interface IEventListener extends Event {
    detail: ITask
}

const App = () => {
    const [tasks, updateTasks] = useState<ITask[]>([]);

    useEffect(() => {
        listenEvent("@hc/react-intern/todo/add-task", (event:IEventListener) => {
            updateTasks(oldTasks => [
                ...oldTasks,
                event.detail
            ])
        })
      }, []);

    return (
        <>
        <h1>@hc/react-parcel</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task=> (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.describe}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default App