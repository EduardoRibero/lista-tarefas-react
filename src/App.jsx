import { useState } from "react";

function App(){

    const [tarefas, setTarefas] = useState(["Lavar o carro", "Arrumar a casa","Estudar python"])
    const [item, setItem] = useState("")

    function add(){
        setTarefas([...tarefas, item])
        setItem("")
    }

    return (<div>
        <h1>Lista de tarefas</h1>

        <ul>
            {tarefas.map((tarefa) =>(
                <li>{tarefa}</li>
            ))}
        </ul>

        <input  type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={add}>add</button>
    </div>);
}

export default App;