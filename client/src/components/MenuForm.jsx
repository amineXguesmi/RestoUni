import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import '../styles/MenuForm.css'
import Layout from "./Layout";
import axios from 'axios';
function MenuForm(props) {
  const [entry, setEntry] = React.useState('');
  const [main, setMain] = React.useState('');
  const [dessert, setDessert] = React.useState('');
  const [date, setDate] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3006/menu/e94caa58-d4af-4ac6-8779-253d426f7870', {
        'entrée': entry,
        'plat': main,
        'dessert': dessert,
        'date': date
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <form className="form-Menu">
          <label className="lb" for="Entry">Entry</label>
          <input name="Entry" id="Entry" type="text" className="infos" value={entry}
        onChange={(e) => setEntry(e.target.value)}/>

          <label for="Main" className="lb">Main </label>
          <input name="Main" id="Main" type="text" className="infos"   value={main}
        onChange={(e) => setMain(e.target.value)}/>

          <label for="Dessert" className="lb">Dessert</label>
          <input name="data" id="Dessert" type="text" className="infos"  value={dessert}
        onChange={(e) => setDessert(e.target.value)}/>
      <label for="data" class="lb">Day</label>
          <input name="data" id="data" type="date" className="infos"     value={date}
        onChange={(e) => setDate(e.target.value)} />

      <button className='btn btnSend' type="submit" onClick={handleSubmit}>Send</button>
          <button className='btn btnClear' type="reset" onClick={props.hide}>Hide </button>
    </form>
  )
}

export default MenuForm
