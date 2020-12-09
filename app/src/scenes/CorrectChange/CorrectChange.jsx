import React from 'react';

import './CorrectChange.css';

import { useForm } from 'react-hook-form';

function CorrectChange() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert("I give you " + data.money + "€.");
  }

  return (
    <div className="CorrectChange">
      <br/><br/><br/><br/>
      <label>You have to pay ... €.</label>
      <br/><br/><br/>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <label>How much you give ?</label><br/><br/>
          <input type= "number" name= "money" ref= {register} placeholder= "Enter money" /><br/>
          <input type= "submit" value= "Pay"/>
          <input type= "reset" value= "Clear"/>
        </form>
      <br/><br/>
    </div>
  );
}

export default CorrectChange;
