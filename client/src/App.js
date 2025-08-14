import { useState } from "react";
import "./App.css";
import AllRoutes from "./routes/allRoutes.js";
import Footer from "./componants/footer.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./componants/header.js";
import { AuthProvider } from "./contexts/authContext.js";

function App() {
  const [querySearch, setQuerySearch] = useState("");
  return (
    <div className="App">
      <ToastContainer />
      <AuthProvider>
        <Header querySearch={querySearch} setQuerySearch={setQuerySearch} />
        <AllRoutes querySearch={querySearch} />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
