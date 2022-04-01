import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state: any)=>state.counter);
  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch({type: "INC"})
  }

  const decrement = () => {
    dispatch({type: "DEC"})
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}> increment</button>
      <button onClick={decrement}> decrement</button>
    </div>
  );
}

export default App;
