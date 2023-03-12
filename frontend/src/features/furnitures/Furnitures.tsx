import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { fetchFurnituresAsync, selectFurnitures, selectStatus, Statuses } from './furnitureSlice'
import {ThunkDispatch} from "@reduxjs/toolkit";
import Furniture from './Furniture';
import FurnitureForm from './FurnitureForm';


function Furnitures() {
    const furnitures = useAppSelector(selectFurnitures)
    const status = useAppSelector(selectStatus)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        dispatch(fetchFurnituresAsync());
    },[dispatch]);
    
    let contents;
        if(status !== Statuses.UpToDate){
            contents = <div>{status}</div>
        } else {
            contents = <div className="card">
                <h3>{status}</h3>
                <FurnitureForm />
                {furnitures && furnitures.length > 0 && furnitures.map(furniture => {
                    return <div key={furniture.id} style={{margin:"5em"}}>
                        {/* <h3>{furniture.title}</h3>
                        <p>{furniture.body}</p> */}
                        < Furniture
                        dispatch= {dispatch}
                        furniture={furniture}
                        />
                        </div>
                })}
            </div>
        }

    return (
        <div>
            <h1>Furniture Store</h1>
            {contents}
        </div>
    )
}

export default Furnitures
