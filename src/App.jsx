import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <div className="main-logo">

      </div>
      {/* <p>欢迎来到清洁一家</p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <div>
            <button onClick={getData}>获取数据</button>
            <button onClick={testPost}>测试post</button>
        </div> */}
    </div>
  );

  function testPost() {
    console.log("test");
    let xhr = new XMLHttpRequest()
    xhr.open("post", "http://localhost:8000/testpost")
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
    xhr.send({ "data": 333 })
  }

  function getData() {
    console.log("test");
    let xhr = new XMLHttpRequest()
    xhr.open("get", "http://localhost:8000/")
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
    xhr.send()
  }
}

export default App;