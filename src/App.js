import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Notes from "./Components/Notes/Notes";
import Todo from "./Components/Todo/Todo";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </div>
  );
}

export default App;
