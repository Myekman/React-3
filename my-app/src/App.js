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
import Content from './components/Content';
import ContentAPI from './components/ContentAPI';

import Exercizes from './components/exercizes';

const dishes = [
  "Köttbullar",
  "Sallad",
  "Fisksoppa",
  "pizza"
];
const dish0bjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}))

function App() {
  return <div className="App">
    {/* <Content/> */}

    {/* -----------------------------------the images app below */}
    {/* <ContentAPI/> */}

    <Exercizes 
      year={new Date().getFullYear()}
      dishes = {dish0bjects}
    />

    {/* <HTTPHooks/>  */}
    {/* <HTTPPost/>
    <HTTPRequest/>
   <ContentHooks/>

    <ClassCounter/>
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
