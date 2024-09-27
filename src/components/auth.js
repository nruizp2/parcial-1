import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";


function Auth(){

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
                alert("Acceso exitoso")
                setError(false)
                navigate("/list")
            } else {
                setError(true)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    


    return(
        <div>
            <div className="card">
                <h2>Inicio de sesión</h2>

                <p>Nombre de usuario</p>
                <input value={user} onChange={(e) => setUser(e.target.value)}></input>

                <p>Contraseña</p>
                <input value={pass} onChange={(e) => setPass(e.target.value)}></input>

                <div>
                    <button onClick={() => get()}>Ingresar</button>
                    <button>Cancelar</button>
                </div>

                {error && <p style={{color:"red"}}>Error de autenticación, revise los credenciales</p>}
            </div>
        </div>
    )
}

export default Auth