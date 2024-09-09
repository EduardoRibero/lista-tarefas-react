import { useState } from "react";

function App(){

    const [tarefas, setTarefas] = useState(["Lavar o carro", "Arrumar a casa","Estudar python"])
    const [item, setItem] = useState("") // definimos o valor do 'imput' como uma variavel para manipular o seu valor e estado. 

    function validacao(item){
        let result = null
        tarefas.forEach((tarefa) =>{
            if(item.toUpperCase() === tarefa.toUpperCase()){
                result = true
            }else{
                result = false
            }
        })

        return result
    }

    function add(){
        console.log()
        
        if(item == "" || validacao(item)){
            
        }else{
            setTarefas([...tarefas, item])
            setItem("")
        }
    }

    function delet(i){
        setTarefas(tarefas.filter((item, e) => e !== i))
    }



    return (<div>
        <h1>Lista de tarefas</h1>

        <ul>
            {tarefas.map((tarefa, i) =>(
                <li key={i}>{tarefa} <button onClick={() => delet(i)}>delet</button></li>
            ))}
        </ul>

        <input  type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={add}>add</button>
    </div>);
}

export default App;