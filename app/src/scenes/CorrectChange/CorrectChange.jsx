import React from 'react';

import './CorrectChange.css';

import { useForm } from 'react-hook-form';

function CorrectChange() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const nb = 20 - data.money;
    alert("I give you " + nb + "€.");
  }

  return (
    <div className="CorrectChange">
      <br/><br/><br/><br/>
      <label>You have to pay 20€.</label>
      <br/><br/><br/>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <label>How much you give ?</label><br/><br/>
          <input type= "number" step= "0.01" name= "money" ref= {register} placeholder= "Enter money" /><br/>
          <input type= "submit" value= "Pay"/>
          <input type= "reset" value= "Clear"/>
        </form>
      <br/><br/>
    </div>
  );
}

export default CorrectChange;
