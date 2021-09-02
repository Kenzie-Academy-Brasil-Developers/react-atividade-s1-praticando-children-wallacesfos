import './App.css';
import CenterCard from "./components/Centercard/centerCard"

function App() {
  return (
    <div className="App">
      <CenterCard>
        <h3>Children 1</h3>
      </CenterCard>

      <CenterCard>
        <h3>Children 2</h3>
      </CenterCard>

      <CenterCard>
        <h3>Children 3</h3>
      </CenterCard>


    </div>
  );
}

export default App;
