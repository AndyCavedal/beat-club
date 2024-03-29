import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowReturnLeft, Pencil, Trash3 } from 'react-bootstrap-icons';
import database from '../assets/database-add.svg';
import '../styles/ReadMenu.scss';



const ReadCategorias = ()=>{
    const [apiCategorias, setApiCategorias] = useState([])


    useEffect(()=>{
        getCategorias()
    },[])

    async function getCategorias() {
        try {
            const resp = await axios.get("https://server-api-beat-club.vercel.app/categorias");
            setApiCategorias(resp.data);
        } catch (error) {
            throw new Error("Error al obtener categorias: " + error.message);
        }
    }


    function onDelete(id) {
        axios.delete(`https://server-api-beat-club.vercel.app/categorias/${id}`).then(() => {
            getCategorias();
        })
    }


    function setData(data) {
        let { categoria_id, nombre, imagen_url } = data;
        localStorage.setItem("categoria_ID", categoria_id);
        localStorage.setItem("NombreCategoria", nombre);
        localStorage.setItem("ImagenCategoria", imagen_url);
    }

    return(
        <div className="read-container__container">
            <div className="links">
                <div className="new__link">
                    <Link className="create__link" to='/createcategorias' >
                        <button>Nueva Categoria</button>
                        <img src={database} className="database-logo" alt="Icono de DataBase" />
                    </Link>
                </div>
                <div className="new__link">
                    <Link className="volver__link" to='/root'>
                        <button>Volver</button>
                        <ArrowReturnLeft className="database-logo" />
                    </Link>
                </div>
            </div>
            <table className="datatable">
                <thead>
                    <tr>
                        <td className="table-title">Nombre</td>
                        <td className="table-title">Imagen</td>
                        <th className="table-title">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(apiCategorias) && apiCategorias.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.nombre}</td>
                            <td><img className="readcategoria-foto" src={elem.imagen_url} alt={elem.nombre} /></td>
                            <td className="button-crud">
                                <Link to='/updatecategorias'>
                                    <button onClick={() => setData(elem)}>
                                        <Pencil />
                                    </button>
                                </Link>
                            </td>
                            <td className="button-crud">
                                <button onClick={() => onDelete(elem.categoria_id)}><Trash3 /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReadCategorias