import { useState } from 'react';
import './App.scss';
import { Form, Joke } from './components';
import sourceOfJokes from './source/jokes-data';

function App() {
  const [userName, setUserName] = useState();
  const [jokesData, setJokesData] = useState([]);

  // const fetchData = async (type, count) => {
  //   const resp = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
  //   const data = await resp.json();
  //   setJokesData(data.slice(0, count));
  // };

  const generateJokesData = (type, count, source) => {
    const data = [...source];
    setJokesData(data
      .filter(item => item.type === type)
      .map((item, index) => ({...item, 'id': index}))
      .slice(0, count));
  };

  const handleSendData = (data) => {
    setUserName(data.name);
    // fetchData(data.type, data.count);
    generateJokesData(data.type, data.count, sourceOfJokes);
  };

  return (
    <div className="app">
      {jokesData.length > 0 ? (
          <div className="app__jokes-container">
            <p>{userName}</p>
            {jokesData.map((item) => <Joke key={item.id} setup={item.setup} punchline={item.punchline} />)}
          </div>
        ) : (
          <div className="app__form-container">
            <Form onSubmitData={handleSendData} />
          </div>
        )
      }
    </div>
  );
}

export default App;
