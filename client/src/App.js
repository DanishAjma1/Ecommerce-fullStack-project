import { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./routes/allRoutes.js";
import Footer from "./componants/footer.js";
import Header from "./componants/header.js";
import stateChanged from "./componants/firebase/onAuthStateChange.js";

function App() {
  const [querySearch, setQuerySearch] = useState("");
  useEffect(() => {
    const unsubscribe = stateChanged();
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header querySearch={querySearch} setQuerySearch={setQuerySearch} />
      <AllRoutes querySearch={querySearch} />
      <Footer />
    </div>
  );
}

export default App;
