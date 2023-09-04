import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControllesFormHooks';
import HooksCounter from './components/HooksCounter';
import UseEffectCounter from './components/UseEffectCounter';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';

function App() {
  return <div className="App">
    <div>
    <ClassCounter/>
    <HooksCounter/>
    </div>
    <ControlledForm/>
    <ControlledFormHooks/>
    <UseStateWithArrays/>
    <UseStateWithObjects/>

    <UseEffectCounter/>
    
  </div>;
   
}

export default App;
