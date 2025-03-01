import { useTranslation } from 'react-i18next';
import './Feedbacks.css'

const Feedbacks = () => {


    const { t, i18n } = useTranslation();


    return (
        <>

            <section
                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'

                }}

                className='feedBack'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <h1 className='text-white'>
                                    {t("feedback_title")}
                                </h1>

                                <p style={{
                                    color: '#b3b2b2'
                                }}>
                                    {t("feedback_desc1")}
                                </p>

                                <img className='my-4' src="/assets/imgs/Group 212.svg" alt="" />

                                <p style={{
                                    color: '#b3b2b2'
                                }}>
                                    {t("feedback_desc2")}
                                </p>


                               


                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <form className='text-white w-75 m-auto'>

                                    <img className='d-block m-auto' src="/assets/imgs/healthicons_agriculture.svg" alt="" />
                                    <h3 className='my-3 text-center'>
                                        {t("getStarted")}

                                    </h3>

                                    <label htmlFor="email">
                                        {t("email")}
                                    </label>
                                    <input type="email" name="" id="email"
                                        className='mb-4 form-control'
                                        placeholder='Enter your email'

                                    />

                                    <label htmlFor="message">
                                        {t("message")}
                                    </label>
                                    {/* <textarea type="text"
                                        className='form-control'
                                    /> */}

                                    <textarea className='form-control'
                                        name="" id=""
                                        placeholder='What do you need?'
                                    >
                                    </textarea>

                                    <button className='btn btn-primary w-100 mt-2'>
                                        Send
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Feedbacks