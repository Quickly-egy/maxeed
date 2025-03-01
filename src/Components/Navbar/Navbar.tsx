import { useTranslation } from 'react-i18next';
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Navbar = () => {


    const { t, i18n } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (



        <>
            <nav
                className={`navbar navbar-expand-lg fixed-top px-lg-5 ${isSticky ? "bg-white shadow-sm" : "bg-white"} transition`}
                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',

                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'
                }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/imgs/maxeedLogo.png" className='me-3 maxLogo' alt="" />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars-staggered text-black"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink

                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}

                                    aria-current="page" to={'/'}>  {t("home")} </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                                    aria-current="page" to="/products"> {t("products")} </NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                                    aria-current="page" to={'/about-us'}> {t("aboutUs")}   </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                                    aria-current="page" to={'/contact-us'}> {t("contactUs")} </NavLink>
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
                            {t("getStarted")}

                        </a>

                        {
                            i18n.language == "en" ?

                                <div className="dropdown">
                                    <button className="btn text-black border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        En
                                    </button>
                                    <ul


                                        className="dropdown-menu">
                                        <li><a className="dropdown-item"
                                            onClick={() => {
                                                i18n.changeLanguage("ar");
                                            }}
                                            href="#">Ar</a></li>
                                    </ul>
                                </div>
                                :

                                <div className="dropdown">
                                    <button

                                        className="btn text-black border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ar
                                    </button>
                                    <ul


                                        className="dropdown-menu">
                                        <li><a className="dropdown-item"
                                            onClick={() => {
                                                i18n.changeLanguage("en");
                                            }}
                                            href="#">En</a></li>
                                    </ul>
                                </div>
                        }




                    </div>
                </div>
            </nav >
        </>

    )
}

export default Navbar