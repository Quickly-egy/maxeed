import { useTranslation } from 'react-i18next';
import './Certificates.css'

const Certificates = () => {

    const { t, i18n } = useTranslation();


    const arrOfcertificates = [
        {
            imgUrl: '/assets/imgs/cer (1).svg',
            cerName: 'ISO - 2018:22000',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '/assets/imgs/cer (2).svg',
            cerName: 'E0S',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '/assets/imgs/cer (3).svg',
            cerName: 'FDA',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '/assets/imgs/cer (4).svg',
            cerName: 'ISO - 2018:22000',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '/assets/imgs/cer (5).svg',
            cerName: 'BRGS',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
    ]

    return (
        <>

            <section
                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'
                }}
                className='certificates'>
                <div className="container">

                    <h1 className='fw-bold'>
                        {t("certificate")}
                    </h1>
                    <p>
                        {t("certificate_desc")}
                    </p>

                    <div className="row justify-content-md-center">


                        {
                            arrOfcertificates.map((item, idx) => {
                                return <div key={idx} className="col-6 col-lg-2">
                                    <div className='p-3 bg-white rounded-2'>
                                        <div
                                            style={{
                                                height: '155px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <img className='d-block mb-2' src={item.imgUrl} alt="" />


                                        </div>
                                        <h6 className='fw-bold'>
                                            {item.cerName}
                                        </h6>


                                        <small>
                                            {item.desc}
                                        </small>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>
            </section>

        </>
    )
}

export default Certificates