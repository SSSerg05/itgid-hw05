import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  function task1() {

  }
  function task2() {

  }
  function task3() {

  }
  function task4() {

  }
  function task5() {

  }
  function task6() {

  }
  function task7() {

  }
  function task8() {

  }
  function task9() {

  }
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text"/>
        <button className="task-1">Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2"></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4">Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button className="task-7">Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
        <div>Тут выводим - форма вывода любая!</div>
      </section>
    </>
  );
}

export default App;
