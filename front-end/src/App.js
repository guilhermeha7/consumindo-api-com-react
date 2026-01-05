import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  //Declara uma variável de estado chamada "counter" inicializada com 0. [valor atual, função para atualizar o valor]
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  )
}

export default App;