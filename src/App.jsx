import { BrowserRouter,Route,Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Task from "./components/Task"

function App() {


  return <>
    <div className="wrapper d-flex ">
      <BrowserRouter>
      <Sidebar />
      <Routes>
      
        <Route  path="/home" element={<Home />} />
        <Route path="/notes"  element={<Notes />} />
        <Route path="/task" element={<Task />} />
        
      </Routes>
        </BrowserRouter>
      
    </div>
  </>

}

export default App
