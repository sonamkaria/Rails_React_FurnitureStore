
import { useDispatch } from 'react-redux'
import React, {useState} from 'react';
import {createFurnitureAsync} from './furnitureSlice';
import {ThunkDispatch} from "@reduxjs/toolkit";

function FurnitureForm() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const[title, setTitle] = useState('')
  const[body, setBody] = useState('')


  function submitHandler(e:any){
    e.preventDefault();
    const formData = {
      furniture: {
        title:title,
        body:body

      }
    }
    dispatch(createFurnitureAsync(formData));
    resetState()
  }



function resetState(){
  setTitle('');
  setBody('');
}


  return (
    <div>
      <h1>Furniture</h1>
      <form>
        <input
        type = "text"
        className="form-control text-start"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
        <textarea
        className='form-control text-strart'
        name="body"
        value={body}
        onChange={(e)=> setBody(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}

export default FurnitureForm
