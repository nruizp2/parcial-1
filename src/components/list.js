import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Detail from "./detail";

import {FormattedMessage, useIntl} from 'react-intl';


function List(){

    const  intl = useIntl()

    const [robots, setRebots] = useState([]);

    const [mostrar, setMostrar] = useState(false);
    const [dID, setDId] = useState(-1);

    const get = async () => {
        try {
            const url = `http://localhost:3001/robots`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            setRebots(data)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClick = (r) => {
        setMostrar(true)
        setDId(r.id)
    }

    useEffect(() => {
        get()
    }, []);


    return(
        <div>

            <div className="row" style={{paddingLeft:"5%"}}>
                <div className="col-6">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>{intl.formatMessage({id:"ID"})}</th>
                                <th >{intl.formatMessage({id:"name"})}</th>
                                <th>{intl.formatMessage({id:"model"})}</th>
                                <th >{intl.formatMessage({id:"empresa"})}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {robots.map(r => (
                                <tr onClick={() => handleClick(r)}>
                                    <th scope="row">{r.id}</th>
                                    <td>{r.nombre}</td>
                                    <td>{r.modelo}</td>
                                    <td>{r.empresaFabricante}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    {mostrar && <Detail key={dID} id ={dID}/>}
                </div>
            </div>

        </div>
    )
}

export default List