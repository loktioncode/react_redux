import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useSelector, useDispatch } from "react-redux";
import { login } from "./actions";


function App() {

  // //access to the global state

  const isLogged = useSelector(state => state.isLogged);

  // //to dispactch actions
  const dispatch = useDispatch();


  const danger = { color: "red" };
  const success = { color: "green" };
  const flot = { float: "left" };

  return (
    <div className="App">
      <header className="App-header">
   
        {isLogged === true ? <h3 style={success}>ACCESS GRANTED</h3> : <h3 style={danger}>ACCESS LIMITED</h3>  }
      
      
        
        {!isLogged ?  <button style={flot} onClick={()=>dispatch(login())}>LOG IN </button> : <button style={flot} onClick={()=>dispatch(login())}>LOG OUT </button> }
     
      
        {isLogged === true ?  <img src={logo} className="App-logo" alt="logo" /> : ''  }
        {isLogged === true ?  <Counter /> : '' }

   
      
      </header>
    </div>
  );
}

export default App;
