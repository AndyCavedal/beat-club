import React, { useState, useEffect } from "react";
import axios from "axios";

const EventosFuturos = () => {

    const [apiEventosF, setApiEventosF] = useState([])


    useEffect(() => {
        getEventosF()
    }, [])

    function getEventosF() {
        axios.get("https://server-api-beat-club.vercel.app/eventos/futuros").then((resp) => {
            setApiEventosF(resp.data)
            console.log(resp.data)
        })
    }

    const formatDate = (dateString) => {
        return dateString.substring(0, 10);
    };

    return (
        <div>
            {apiEventosF.map((evento, index) => (
                <div key={index}>
                    <h4>{evento.titulo}</h4>
                    <img src={evento.img_url} alt={evento.titulo} />
                    <span>{formatDate(evento.fecha_evento)}</span>
                </div>
            ))}
        </div>
    )
}

export default EventosFuturos;