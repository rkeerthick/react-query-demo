import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home.page";
import Superheros from "./Components/Superheros.page";
import RQSuperheros from "./Components/RQSuperheros.page";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heros">SuperHeros</Link>
            </li>
            <li>
              <Link to="/rq-super-heros">RQ SuperHeros</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heros" element={<Superheros />} />
        <Route path="/rq-super-heros" element={<RQSuperheros />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
