import { useState } from 'react';
import './styles/App.css';
import Button from './components/Button';
import ResetButton from './components/ResetButton';
import Screen from './components/Screen';
import {evaluate} from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const result = () => {
    setInput(evaluate(input));
  };

  const reset = () => {
    if(input === '')
    {
      console.log('input is already empty');
    }else
    {
      setInput('');
    }
  };

  return (
    <div className="App">
      <div className='main-container'>
        <Screen input={input} />
        <div className='row'>
          <Button action={addInput}>7</Button>
          <Button action={addInput}>8</Button>
          <Button action={addInput}>9</Button>
          <Button action={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button action={addInput}>4</Button>
          <Button action={addInput}>5</Button>
          <Button action={addInput}>6</Button>
          <Button action={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button action={addInput}>1</Button>
          <Button action={addInput}>2</Button>
          <Button action={addInput}>3</Button>
          <Button action={addInput}>+</Button>
        </div>
        <div className='row'>
        <Button action={addInput}>.</Button>
        <Button action={addInput}>0</Button>
        <Button action={addInput}>00</Button>
        <Button action={addInput}>/</Button>
        </div>
        <div className='row'>
        <Button action={result}>=</Button>
        <ResetButton action ={reset}>C</ResetButton>
        </div>
      </div>
    </div>
  );
}

export default App;
