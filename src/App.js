import logo from './logo.svg';
import './App.css';
import Keys from './components/Keys';
import { MultiStepLoader } from './components/Multiloader';
import { useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const loadingStates = [
    {
      text: "Buying a condo",
    },
    {
      text: "Travelling in a flight",
    },
    {
      text: "Meeting Tyler Durden",
    },
    {
      text: "He makes soap",
    },
    {
      text: "We goto a bar",
    },
    {
      text: "Start a fight",
    },
    {
      text: "We like it",
    },
    {
      text: "Welcome to F**** C***",
    },
  ];
  return (
    <div className="App">
      <Keys />
      <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000}/>
    </div>
  );
}

export default App;
