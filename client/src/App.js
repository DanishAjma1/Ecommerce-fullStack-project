import './App.css';
import AllRoutes from './componants/allRoutes.js';
import Footer from './componants/footer.js';
import Header from './componants/header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;