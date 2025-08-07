import { useState } from "react";
import "./App.css";
import AllRoutes from "./componants/allRoutes.js";
import Footer from "./componants/footer.js";
import Header from "./componants/header.js";

function App() {
  const [querySearch, setQuerySearch] = useState("");
  return (
    <div className="App">
      <Header querySearch={querySearch} setQuerySearch={setQuerySearch} />
      <AllRoutes querySearch={querySearch} />
      <Footer />
    </div>
  );
}

export default App;
