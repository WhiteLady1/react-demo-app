import { useState } from 'react';
import { Form, Joke } from './components';
import sourceOfJokes from './source/jokes-data';
import './App.scss';
import { ScrollShadow } from '@nextui-org/react';

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
      {userName && (
        <p className="app__greetings">{userName}</p>
      )}
      {jokesData.length > 0 ? (
        <ScrollShadow hideScrollBar>
          <div className="app__jokes-container">
            {jokesData.map((item) => <Joke key={item.id} setup={item.setup} punchline={item.punchline} showRating />)}
          </div>
        </ScrollShadow>
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
