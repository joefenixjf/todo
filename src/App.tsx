import { useState } from "react";
import * as S from "./App.styles";
import { Item } from "./types/Item";
import { AddArea } from "./components/addArea";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de tarefas</S.Header>
        
        {/* Área de adicionar novas tarefas */}
        <AddArea onEnter={ handleAddTask }/>
        
        {/* Lista de tarefas */}
        {
          list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))
        }
      </S.Area>
    </S.Container>
    
  )
}

export default App;