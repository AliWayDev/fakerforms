import { IndexRoutes } from "./routes";
import { ToastConfig } from "./components/UI/ToastConfig";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <IndexRoutes />
      <ToastConfig />
    </>
  );
}

export default App;
