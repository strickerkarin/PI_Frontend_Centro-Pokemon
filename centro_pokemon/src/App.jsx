import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Formulario />} />
      </Routes>
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
