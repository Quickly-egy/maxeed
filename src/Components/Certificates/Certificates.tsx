import React from 'react'
import './Certificates.css'

const Certificates = () => {

    const arrOfcertificates = [
        {
            imgUrl: '../../../public/assets/imgs/cer (1).svg',
            cerName: 'ISO - 2018:22000',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '../../../public/assets/imgs/cer (2).svg',
            cerName: 'E0S',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '../../../public/assets/imgs/cer (3).svg',
            cerName: 'FDA',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '../../../public/assets/imgs/cer (4).svg',
            cerName: 'ISO - 2018:22000',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
        {
            imgUrl: '../../../public/assets/imgs/cer (5).svg',
            cerName: 'BRGS',
            desc: 'ISO 22000:2018 is an international Food Safety Management System (FSMS) standard that ensures food safety at all stages of the food supply chain, from production to consumption. It integrates Hazard',
        },
    ]

    return (
        <>

            <section className='certificates'>
                <div className="container">

                    <h1 className='fw-bold'>Our Certificates</h1>
                    <p>At Maxed, we take pride in our commitment to excellence, quality, and compliance with international standards.</p>

                    <div className="row">

                        {
                            arrOfcertificates.map((item, idx) => {
                                return <div key={idx} className="col-lg-2">
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