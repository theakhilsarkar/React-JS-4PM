import react from "react";
import "./App.css";
// component : Individual UI Block
// UI Store -> functional component - function

// functional component -> a function which is return UI.
// a functional component handle specific type of UI code in block.

// value store -> variable
// process store -> function is reuseable block of code which is used to perform specific task
// process of printing 1 to 20.

// FileName = Component Name
// FileName always CAPITAL letter start
// AboutPage -> camel case
// file ext -> UI holder -> .jsx (javascript + xml)

// function App() {
//   return <h1>Home</h1>;
// }

// every file connect -> import export

// named export
export const App = () => {
  return <h1>Home page</h1>;
};

const value = 12000;
export default value;
