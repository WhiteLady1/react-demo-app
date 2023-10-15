/* eslint-disable react/prop-types */
import './joke.scss';

export const Joke = ({ setup, punchline }) => (
  <div className="joke">
    <p className="joke__setup">{setup}</p>
    <p className="joke__punchline">{punchline}</p>
  </div>
);
