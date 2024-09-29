import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../css/auth.css"
import { useNavigate } from "react-router-dom";

import {FormattedMessage, useIntl} from 'react-intl';

function Auth(){

    const intl = useIntl();

    let navigate = useNavigate();

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const [error, setError] = useState(false)

    const get = async () => {
        try {
            const url = `http://localhost:3001/login`;
            
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    "login": user,
                    "password": pass
                })
            });
            const data = await response.json();
            
            if(data.status === "success"){
                setError(false)
                navigate("/list")
            } else {
                setError(true)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            get();
        }
    };
    


    return(
        <div onKeyDown={handleKeyDown}>
            <div>
                <h2 style={{textAlign:"center"}}>{intl.formatMessage({id:"inicio"})}</h2>

                <div className="div-auth">
                    <label className="input-text-auth">{intl.formatMessage({id:"user"})}</label>
                    <input style={{border:`2px solid ${error? "#c0b1b4": "#8a7d7d"}`}} className="input-auth" value={user} onChange={(e) => setUser(e.target.value)}></input>

                    <label className="input-text-auth">{intl.formatMessage({id:"pass"})}</label>
                    <input type="password" style={{border:`2px solid ${error? "#c0b1b4": "#8a7d7d"}`}} className="input-auth" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                </div>

                <div className="div-buttons-auth">
                    <button className="button-ingresar"   onClick={() => get()}>{intl.formatMessage({id:"butt-log"})}</button>
                    <button className="button-cancelar">{intl.formatMessage({id:"cancel"})}</button>
                </div>

                {error && <p className="error-text" >{intl.formatMessage({id:"error"})}</p>}
            </div>
        </div>
    )
}

export default Auth