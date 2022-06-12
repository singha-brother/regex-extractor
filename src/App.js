import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Output from "./components/Output";
import { useGlobalContext } from "./context/context";

function App() {
  const { error } = useGlobalContext();
  return (
    <div className="App">
      <Header />
      {error && <Error />}
      <Form />
      <Output />
    </div>
  );
}

export default App;
