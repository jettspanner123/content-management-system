import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<LandingPage />}/>
                <Route path={`/home`} element={<Dashboard />} />
                <Route path={`/images`} element={<Dashboard />} />
                <Route path={`/home`} element={<Dashboard />} />
                <Route path={`/home`} element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
