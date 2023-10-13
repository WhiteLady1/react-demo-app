/* eslint-disable react/prop-types */
import { useState } from 'react';
import './form.scss';

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

export const Form = ({onSubmitData}) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'general',
    count: 0,
  })

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Name
        <input required onChange={(e) => setFormData({...formData, name: e.target.value})}/>
      </label>

      <label className="form__label">
        Select type of Jokes
        <select className="form__select" required onChange={(e) => setFormData({...formData, type: e.target.value})}>
          <option value="">Select one</option>
          {TYPES.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select className="form__select" required onChange={(e) => setFormData({...formData, count: e.target.value})}>
          <option value="">Select one</option>
          {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <button className="form__button" type='submit'>Submit</button>
    </form>
  );
};
