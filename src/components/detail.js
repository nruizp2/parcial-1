import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";


function Detail({id}){

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
        <div className="card" style={{height:"100%", width:"80%", alignItems:"center"}}>
            <div className="card-body" >
                <h1>{robot.nombre}</h1>
                <img class="card-img" style={{height:"50%", width:"50%"}} src={robot.imagen + "?raw=true"}></img>
                <p>Año de fabricación: {robot.añoFabricacion}</p>
                <p>Capacidad de procesamiento: {robot.capacidadProcesamiento}</p>
                <p>Humor: {robot.humor}</p>
            </div>
            
        </div>
    )
}

export default Detail