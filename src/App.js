
import './App.css';
import Greet from './components/Greet';
import Class from './components/Class'
import Count from './components/Count';
import Functionclick from './components/Functionclick';
import Eventbind from './components/Eventbind';
import Parentcomponent from './components/Parentcomponent';
import Usergreeting from './components/Usergreeting';
import Person from './components/Person';
import StyleSheet from './components/Stylesheet';
import Form from './components/Form';
import Lifecycles from './components/Lifecycles';
import Parentcomp from './components/Parentcomp';
import Memo from './components/Memcomp';
import RefsDemo from './components/RefsDemo';
import Focusinput from './components/Focusinput';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';
import Counter from './components/Render/Counter';
import ClickCounter from './components/Render/ClickCounter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="ss"></Greet>
      <Class name="jj"></Class>
      <Count></Count>
      <Functionclick></Functionclick>
      <Parentcomponent></Parentcomponent>
      <Usergreeting></Usergreeting>
      <Person></Person>
     <StyleSheet primary={true}></StyleSheet> */}
     {/* <Form></Form> */}
     {/* <Lifecycles></Lifecycles> */}
     {/* <Parentcomp></Parentcomp> */}
     {/* <RefsDemo></RefsDemo> */}
     {/* <Focusinput></Focusinput> */}
     {/* <Errorboundary>
     <Hero heroname="batman"></Hero>
     <Hero heroname="superman"></Hero>
     </Errorboundary>
     <Errorboundary>
     <Hero heroname="joker"></Hero>
     </Errorboundary> */}
         <Counter render={(count,incrementCount)=>(
        <ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>
      )}></Counter>
    </div>
  );
}

export default App;
