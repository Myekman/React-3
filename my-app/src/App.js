import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControllesFormHooks';
import HooksCounter from './components/HooksCounter';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import StatefulGreeting from './components/StatefulGreeting';
import ContentHooks from './components/ContentHooks';
import HTTPRequest from './components/HTTPRequest';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return <div className="App">
    <HTTPHooks/>
    {/* <HTTPPost/> */}
    {/* <HTTPRequest/> */}
    {/* <ContentHooks/> */}
    {/* <ClassCounter/>
    <HooksCounter/>
    <ControlledForm/>
    <ControlledFormHooks/>
    <UseStateWithArrays/>
    <UseStateWithObjects/>
    <UseEffectCounterContainer/> */}
    {/* <StatefulGreeting greeting="im a stateful class component"/> */}
  </div>;
   
}

export default App;
