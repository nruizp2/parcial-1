import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import "../css/detail.css"

import {FormattedMessage, useIntl} from 'react-intl';

function Detail({id}){

    const intl = useIntl();

    const [robot, setRobot] = useState(null)

    const get = async () => {
        try {
            const url = `http://localhost:3001/robots/${id}`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            setRobot(data)
            console.log(data)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        get()
    }, []);


    if(robot === null){
        return(<div></div>);
    }
    
    return(
        <div className="card text-center bg-light" style={{height:"auto", width:"60%",  border: "3px solid #8f8d8e"}}>
            <div className="card-body" >
                <p className="card-title" style={{fontWeight:"bold"}}>{robot.nombre}</p>
                <img class="card-img" style={{height:"50%", width:"50%", border: "3px solid #8f8d8e"}} src={robot.imagen + "?raw=true"}></img>
                <div className="div-p-detail">
                    <p className="p-detail">→<strong>{intl.formatMessage({id:"añoFab"})}: </strong>{robot.añoFabricacion}</p>
                    <p className="p-detail">→<strong>{intl.formatMessage({id:"capacidad"})}:</strong> {robot.capacidadProcesamiento}</p>
                    <p className="p-detail">→<strong>{intl.formatMessage({id:"humor"})}:</strong> {robot.humor}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Detail