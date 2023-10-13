import { useState } from 'react';
import './App.css';
import { Form } from './components';

function App() {
  const [colectedData, setColectedData] = useState({
    name: '',
    type: '',
    count: 0,
  });
  const [jokesData, setJokesData] = useState({});

  const fetchData = async (type) => {
    const resp = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
    const data = await resp.json();
    setJokesData(data);
  };

  const handleSendData = (data) => {
    setColectedData(data);
    fetchData(data.type);
    console.log(data);
  };

  return (
    <>
      <p>{colectedData.name}</p>
      <Form onSubmitData={handleSendData} />
    </>
  )
}

export default App;
