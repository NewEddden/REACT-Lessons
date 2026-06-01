import List from "./components/List";
import MyButton from "./components/MyButton";
import MyProp from "./components/MyProp";
import Boolean from "./components/Boolean";
import LikeButton from "./components/LikeButton";
import TemperatureConverter from "./components/TemperatureConverter";
import CharacterCounter from "./components/CharacterCounter";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <List />
      <MyButton />
      <MyProp name="Edly Cenatus" title="Direct Support Professional" />
      <Boolean />
      <LikeButton />

      <TemperatureConverter />
      <CharacterCounter />
      <Nav />
    </>
  );
}

export default App;
