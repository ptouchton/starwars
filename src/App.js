import { useState } from "react";
import Navbar from "./Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {

  const [page, setPage] = useState('People');

  return (
    <div className="App">
      <div className="content">
        <h1>Star Wars!</h1>
        <Navbar setPage={setPage}/>
        <div>
          { page === 'people' ? <People /> : <Planets /> }
        </div>
      </div>
    </div>
  );
}

export default App;
