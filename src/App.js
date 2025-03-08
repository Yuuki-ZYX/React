import { useState } from "react";

const MyButton = () => {
  const [cnt,setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt+1);
  }

  return(
    <button onClick={handleClick}>
      点了{cnt}次
    </button>
  )

}

function App() {
  
  return (
    <div className="App">
     <MyButton />
     <br />
     <MyButton />   
     {/* 不同组件的cnt是独立的 */}
    </div>
  );
}

export default App;
