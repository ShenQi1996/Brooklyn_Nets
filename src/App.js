import "./App.css";
import List from "./components/List/List";
function App() {
  return (
    <div className="app">
      <div className="app_header"></div>
      <h1>BROOKLYN NETS ROSTER</h1>
      <List className="list" />
    </div>
  );
}

export default App;
