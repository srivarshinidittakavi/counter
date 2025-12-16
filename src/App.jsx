import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Counter Example</h2>
      <Counter />

      <h2>React Calculator Example</h2>
      <Calculator />

      <h2>Message Cards Example</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <MessageCard title="Welcome" message="This is the first card." />
        <MessageCard title="React Props" message="Props make components reusable." />
        <MessageCard title="Assignment" message="You are building a MessageCard component." />
        <MessageCard title="Final Card" message="Each card shows different text." />
      </div>
    </div>
  );
}

export default App;