import { useTranslation } from 'react-i18next';
import './OurPrograms.css'

const OurPrograms = () => {

    const { t, i18n } = useTranslation();


    return (
        <>
            <section

                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'
                }}
                className='ourPrograms'>
                <div className="container">

                    <div
                        style={{
                            width: 'fit-content'
                        }}
                        className='position-relative m-auto'>
                        <span
                            className=' d-inline-block border border-1 rounded-5 m-auto'
                            style={{
                                padding: '9px 32px 9px 70px'

                            }}

                        >
                            <img className='position position-absolute start-0 top-0 bottom-0' src="/assets/imgs/Frame 7.svg" alt="" />
                            {t("ourPrograms")}
                        </span>
                    </div>

                    <div className='text-center'>
                        <h1 className='my-4'>
                            Some of the services provided by our company
                        </h1>
                        <h6>
                            {t("ourProgramsDesc")}
                        </h6>
                    </div>


                    <div className="row mt-4 justify-content-center">

                        <div className="col-md-6 col-lg-4">
                            <div className='imgWrapper position-relative'>
                                <img src="/assets/imgs/Frame 25.svg" className='w-100' alt="" />
                                <div className='transparentOverlay text-white ps-4 pt-5 pe-3'>

                                    <h2>
                                        2578
                                    </h2>

                                    <h6>
                                        types of agricultural crops
                                    </h6>

                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        {t("card_one_text1")}
                                    </small>
                                    <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>
                                        {t("card_one_text2")}
                                    </small>
                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        {t("card_one_text3")}
                                    </small>

                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className='imgWrapper position-relative'>
                                <img src="/assets/imgs/Frame 18.svg" className='w-100' alt="" />

                                <div className='transparentOverlay text-white ps-4 pt-5 pe-3'>

                                    <h2>
                                        10,000+
                                    </h2>
                                    <h6>
                                        Fertilizers and agricultural pesticides
                                    </h6>

                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        {t("card_two_text1")}
                                    </small>
                                    <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>
                                        {t("card_two_text2")}
                                    </small>
                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        {t("card_two_text3")}
                                    </small>

                                </div>
                            </div>


                        </div>

                        <div className="col-md-6 col-lg-4 mt-md-4 mt-lg-0">
                            <div className='imgWrapper position-relative'>
                                <img src="/assets/imgs/Frame 19.svg" className='w-100' alt="" />

                                <div className='transparentOverlay text-white ps-4 pt-5 pe-3'>

                                    <h2>
                                        500+
                                    </h2>
                                    <h6>
                                        Production of seeds and seeds
                                    </h6>

                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        {t("card_three_text1")}
                                    </small>
                                    <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>
                                        {t("card_three_text2")}
                                    </small>
                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        {t("card_three_text3")}
                                    </small>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurPrograms