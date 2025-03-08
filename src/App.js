import { useState } from "react";

const MyButton = ({cnt,handleClick}) => {

  return(
    <button onClick={handleClick}>
      点了{cnt}次
    </button>
  );

};

function App() {
  const [cnt,setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt+1);
  }
  return (
    <div className="App">
      <h3>共同更新的计数器</h3>
     <MyButton cnt={cnt} handleClick={handleClick}/>
     <br />
     <MyButton cnt={cnt} handleClick={handleClick}/>   
    </div>
  );
}

export default App;
