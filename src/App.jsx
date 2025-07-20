import "./App.css";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Redux Toolkit Example</h1>
        <Auth />
        <Counter />
        <Todo />
      </div>
    </>
  );
}

export default App;
