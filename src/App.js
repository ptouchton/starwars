import { useState } from "react";
import Navbar from "./Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient();

function App() {

  const [page, setPage] = useState('People');


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="content">
          <h1>Star Wars!</h1>
          <Navbar setPage={setPage} />
          <div>
            {page === 'people' ? <People /> : <Planets />}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
