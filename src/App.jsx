/*eslint no-eval:0*/
import words from 'lodash.words';
import React, { useState } from 'react';
import Result from './components/Result';
import './App.css';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';

const App = () => {
  const [stack, setStack] = useState('');
  const [symbol, setSymbol] = useState('');
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : '0';

  return (
    <main className="react-calculator">
      <Result value={value} symbol={symbol} />

      <Numbers
        onNumber={(num) => {
          setSymbol('');

          setStack(`${stack}${num}`);
        }}
      />

      <Functions
        onContentClear={() => {
          setStack('');
          setSymbol('');
        }}
        onDelete={() => setStack(stack.slice(0, -1))}
      />

      <MathOperations
        onClickOperation={(operation) => {
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={() => {
          const result = eval(stack);
          if (result < 0) {
            setStack(result.toString());
            setSymbol('-');
          } else {
            setStack(result.toString());
            setSymbol('');
          }
        }}
        //onClickEqual={() => setStack(eval(stack).toString())}
      />
    </main>
  );
};

export default App;
