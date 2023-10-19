import { useState } from 'react';
import './form.scss';

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

interface FormDataInterface {
  name: string;
  type: string;
  count: number;
};

export const Form: React.FC = ({ onSubmitData }) => {
  const [formData, setFormData] = useState<FormDataInterface>({
    name: '',
    type: '',
    count: 0,
  })

  const options: number[] = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitData(formData);
  };

  const handleChange = (event) => {
    setFormData({...formData, [event.targe.name]: event.target.value});
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name='name'
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      <label className="form__label">
        Select type of Jokes
        <select
          className="form__input"
          name='type'
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="">Select one</option>
          {TYPES.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select
          className="form__input"
          name='count'
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="">Select one</option>
          {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <button className="form__button" type='submit'>Submit</button>
    </form>
  );
};
