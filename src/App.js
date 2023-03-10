import "./App.css";
import "./nomalize.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
