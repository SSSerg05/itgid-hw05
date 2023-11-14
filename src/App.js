import './App.css';
import React, { useState } from 'react';

function App() {
  const [st1, setST1] = useState('');
  const [st2, setST2] = useState(0);
  const [st3, setST3] = useState('');
  const [st4, setST4] = useState(0);
  const [st5, setST5] = useState('');
  const [st6, setST6] = useState('');
  const [st7, setST7] = useState([]);
  const [st8, setST8] = useState('');
  const [st9, setST9] = useState('');
  const [st10, setST10] = useState([]);

  const ref1 = React.createRef();
  const ref7 = React.createRef();
  const ref8 = React.createRef();
  const ref10 = React.createRef();

  function task1(e) {
    const val = ref1.current.value;
    setST1(val);
    ref1.current.value = '';
  }

  function task2() {
    setST2((r) => r += 1 );
  }

  function task3(e) {
    const val = e.target.value;
    setST3(val);

  }
  
  function task4() {
    setST4((r) => r += 1);
  }
  
  function task5(e) {
    if (e.target.checked) {
      setST5(e.target.value);
      return
    }
    setST5(0);
  }

  function task6(e) {
    const val = e.target.value;
    setST6(val);
  }

  function task7() {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    setST7([
      getRandomInt(0, 255), 
      getRandomInt(0, 255), 
      getRandomInt(0, 255)
    ]);

    const [r,g,b] = st7;
    ref7.current.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  function task8() {
    const val = ref8.current.value;

    if (!val.length) {
      setST8('');
      return;
    }

    const last = val.charCodeAt(val.length-1);
    const rest = last > 47 && last < 59 ? '1': '0';

    if (st8.length > val.length) {
      setST8((r)=> r.slice(0, -1));
      return;
    }

    setST8((r) => r + rest);

  }

  function task9(e) {
    const val = e.target.value;
    setST9(val);
  }

  function task10() {
    const val = ref10.current.value.trim();
    if (val === '') {
      return
    }

    setST10((r) => [...r, +val])
    ref10.current.value = '';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		    <input type="text" ref={ref1}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={ref7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8} ref={ref8}></input>
        <div>{st8}</div>
      </section>
      
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>Тут выводим - форма вывода любая!<br />{st10}</div>
      </section>
    </>
  );
}

export default App;
