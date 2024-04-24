import "./App.css";
import Toast from "./components/Toast";

function App() {
  return (
    <div>
      <Toast type="success" />
      <Toast type="error" />
      <Toast type="warning" />
      <Toast type="info" />
    </div>
  );
}

export default App;
