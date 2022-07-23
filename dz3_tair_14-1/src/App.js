import logo from './logo.svg';
import './App.css';

import './App.css';
import ClassComp1 from "./comp/ClassCopm1"
import ClassComp2 from './comp/ClassComp2';
function App() {
  const arr=["Dastan ", " ali", "  amir"]
  return (
      <div className="App">
        <h1>hello world</h1>

        <ClassComp1 users={arr}/>
        <ClassComp2 users={arr}/>

      </div>
  );
}

export default App;