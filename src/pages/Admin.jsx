import React from "react";
import '../styles/Admin.scss';
import { Link } from "react-router-dom";

const Admin = ()=> {
    return (
        <div className="root-interface__container">
            <h2>Menu Admin</h2>
            <div className="buttons__container">
                <Link to='/readproductos'>
                    <button>Productos</button>
                </Link>
                <Link to='/readeventos'>
                    <button>Eventos</button>
                </Link>
                <Link to='/readcategorias'>
                    <button>Categorias</button>
                </Link>
            </div>
        </div>
    );
};

export default Admin;