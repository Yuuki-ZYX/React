// 项目的根组件
// useState是实现一个计数器
import { useState } from "react";
function App() {
  const [form,setForm] = useState({name:'jack',age:13});

  const changeForm = () => {
    setForm({
      ...form,
      name:'peter'
    })
  }
  return (
    <div className="App">
      <button onClick={changeForm}>{form.name}</button>
    </div>
  );
}

export default App;
