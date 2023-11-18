import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home.page";
import Superheros from "./Components/Superheros.page";
import RQSuperheros from "./Components/RQSuperheros.page";
import RQHSuperheros from "./Components/RQHSuperheros.page";
import RQSuperHero from "./Components/RQSuperHero.page";
import RQParallelQuery from "./Components/RQParallelQuery.page";
import DynamicParallelQueries from "./Components/DynamicParallelQueries";

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
            <li>
              <Link to="/rqh-super-heros">RQH SuperHeros</Link>
            </li>
            <li>
              <Link to="/rq-parallel-query">RQ Parallel</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heros" element={<Superheros />} />
        <Route path="/rq-super-heros" element={<RQSuperheros />} />
        <Route path="/rqh-super-heros" element={<RQHSuperheros />} />
        <Route path="/rq-super-hero/:heroID" element={<RQSuperHero />} />
        <Route path="/rq-parallel-query" element={<RQParallelQuery />} />
        <Route path="/rq-dynamic-parallel-query" element={<DynamicParallelQueries ids={[1, 3]} />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
