/* eslint-disable react/prop-types */

export const Jokes = ({ jokes }) => {
  return (
    <div>
      {jokes.map( (item, index) => <p key={index}>{item.setup}</p>)}
    </div>
  );
};
