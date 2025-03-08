// React必要的两个核心包
import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";

// 把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
