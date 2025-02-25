import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {



    return (

        <>
            <nav className="navbar navbar-expand-lg bg-dark text-white px-4 py-3">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        <img src="/assets/imgs/logo.svg" className='me-3' alt="" />
                        Maxed Logo
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars-staggered text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <NavLink

                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}

                                    aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                                    aria-current="page" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                                    aria-current="page" to={'/contact-us'}>Contact us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                                    aria-current="page" to={'/about-us'}>About us</NavLink>
                            </li>

                        </ul>

                        <a href="#"
                            className='text-decoration-none 
                            text-white btn 
                             text-capitalize px-4'
                            style={{
                                backgroundColor: 'rgba(117, 145, 163, 1)'
                            }}
                        >

                            get started
                        </a>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar