import { useState } from 'react';
import './App.scss';
import { Form, Joke } from './components';

function App() {
  const [colectedData, setColectedData] = useState({
    name: '',
    type: '',
    count: null,
  });
  const [jokesData, setJokesData] = useState([]);

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
    <div className="app">
      {jokesData.length > 0 ? (
          <div className="app__jokes-container">
            <p>{colectedData.name}</p>
            {jokesData.slice(0, colectedData.count).map( item => <Joke key={item.id} joke={item} />)}
          </div>
        ) : (
          <div className="app__form-container">
            <Form onSubmitData={handleSendData} />
          </div>
        )
      }
    </div>
  )
}

export default App;
