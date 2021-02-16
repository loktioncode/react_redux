import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";


function App() {

  //access to the global state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  const danger = { color: "red" };
  const success = { color: "green" };
  const flot = { float: "left" };

  return (
    <div className="App">
      <header className="App-header">
        {isLogged === true ? <h3 style={success}>ACCESS GRANTED</h3> : <h3 style={danger}>ACCESS LIMITED</h3>  }
      
      
        <button style={flot} onClick={()=>dispatch(login())}>LOG IN </button>

     
      
        {isLogged === true ?  <img src={logo} className="App-logo" alt="logo" /> : ''  }
        {isLogged === true ?  <p>Hello Future</p> : '' }

        {
        isLogged ?  
        <div>
            <p>
              counter state is: {counter}
            </p>
          <button onClick={()=>dispatch(increment())}>+</button>  <button onClick={()=>dispatch(decrement())}>-</button>
        </div> : '' 
        }  
      
      </header>
    </div>
  );
}

export default App;
