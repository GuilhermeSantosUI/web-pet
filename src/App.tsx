import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Global />
    </BrowserRouter>
  );
}

export default App;
