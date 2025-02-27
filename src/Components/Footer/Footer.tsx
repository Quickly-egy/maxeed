import { useTranslation } from 'react-i18next';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    const { t, i18n } = useTranslation();


    return (
        <>
            <footer
                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'
                }}
            >
                <div className="container">
                    <div className="row ">
                        <div className="col-md-5 col-lg-4">
                            <h1>
                                {t("footer_title")}
                            </h1>
                            <p>
                                {t("footer_desc")}
                            </p>

                            <div className='inputWrapper position-relative'>
                                <input type="email"
                                    className=''
                                    placeholder={`${t("emailPlaceholder")}`}

                                />
                                <i className='fa-solid  fa-arrow-right'></i>
                            </div>
                        </div>

                        <div className=" col-md-5 col-lg-3">
                            <ul className='list-unstyled ps-5 ms-5'>
                                <li> <Link className='text-decoration-none' to={'contact-us'}>
                                    {t("contactUs")}
                                </Link> </li>
                                <li> <Link className='text-decoration-none' to={'about-us'}>
                                    {t("aboutUs")}
                                </Link> </li>
                                <li> <Link className='text-decoration-none' to={'products'}> Our Products </Link> </li>
                                {/* <li><Link to={''}> Contact us </Link> </li> */}
                            </ul>
                        </div>

                        <div className="col-lg-2 align-self-start">
                            {/* <ul className='list-unstyled ps-4'>
                                <li>Talk to Us</li>
                                <li>Our products</li>
                                <li> Get in touch </li>
                                <li>Privacy</li>
                                <li>Terms & Conditions</li>
                            </ul> */}
                        </div>

                        <div className='privacy d-flex justify-content-between mt-4 w-100'>

                            <p>
                                {t("privacyPolicy")}

                            </p>


                        </div>


                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer