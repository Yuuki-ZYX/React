// 项目的根组件

function MyButton() {
  return (
    <button>我是一个按钮</button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>欢迎来到我的应用</h1>
      <MyButton />
    </div>
  );
}

export default App;
