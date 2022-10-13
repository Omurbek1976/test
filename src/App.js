import "./App.css";
import Expenses from "./components/Expenses";
import { expenses } from "./utils/data";
function App() {
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;