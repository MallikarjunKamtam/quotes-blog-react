import "./App.css";
import Homepage from "./components/Homepage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Homepage />
      <ToastContainer />
    </div>
  );
}

export default App;
