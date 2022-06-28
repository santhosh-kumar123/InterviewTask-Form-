import './App.css';
// import DynamicForm from './components/DynamicForm';
import formElements from "./backend/formElements.json"
import Fetching from './Fetching/Fetching';
console.log(formElements);
function App() {
  return (
    <div className="App container">
      {/* <DynamicForm/> */}
      <Fetching/>
    </div>
  );
}

export default App;
