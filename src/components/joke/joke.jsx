/* eslint-disable react/prop-types */
import './joke.scss';

export const Joke = ({ joke }) => {
  return (
    <div className="joke">
      <p className="joke__setup">{joke?.setup}</p>
      <p className="joke__punchline">{joke?.punchline}</p>
    </div>
  );
};
