import "./layout.scss"
import Navbar from "./components/navbar/navbar";
import HomePage from "./routes/homePage/homePage";
const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  );
  
}

export default App;
