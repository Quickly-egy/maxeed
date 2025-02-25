import React from 'react'
import './Support.css'
const Support = () => {

    const arrOfSupport = [
        {
            name: 'Products quality',
            desc: 'Providing premium agricultural crops with certified quality and freshness.',
            img: '/assets/imgs/activity 1.svg'
        },

        {
            name: 'Product diversity',
            desc: 'Exporting a diverse range of fruits, vegetables, grains, spices, and legumes, including organic and healthy options..',
            img: '/assets/imgs/Group.svg'

        },
        {
            name: 'Experience in export and markets',
            desc: 'Extensive experience in exporting agricultural products worldwide, with in-depth knowledge of customs regulations and market requirements.',
            img: '/assets/imgs/Group.svg'

        },
        {
            name: 'Innovation and technology',
            desc: 'Utilizing advanced storage and packaging technologies to maintain quality, with modern tracking systems for real-time shipment monitoring.',
            img: '/assets/imgs/lsicon_marketing-filled.svg'

        }

    ]

    return (
        <>

            <section className='support' >
                <div className="container">


                    <div className="row justify-content-between">

                        <div className="col-lg-6">
                            <div>
                                <h1>
                                    How we support our pratner all over the world
                                </h1>

                                <p className='my-4'>
                                    Exporting has become a key model for delivering high-quality agricultural products to global markets, including grains, fresh produce, spices, and organic crops. We provide reliable supply chain solutions, ensuring premium agricultural exports meet international standards.
                                </p>

                                <div className='w-50 d-flex justify-content-between'>
                                    <article>

                                        <span className='d-block text-warning'>
                                            <i className="fa-solid fa-star me-2"></i>
                                            <i className="fa-solid fa-star me-2"></i>
                                            <i className="fa-solid fa-star me-2"></i>
                                            <i className="fa-solid fa-star me-2"></i>
                                        </span>

                                        <h6>
                                            4.9 / 5 rating
                                        </h6>

                                        <small>
                                            Exporting crops
                                        </small>


                                    </article>

                                    <article>

                                        <span className='d-block text-warning'>
                                            <i className="fa-solid fa-star me-2 "></i>
                                            <i className="fa-solid fa-star me-2"></i>
                                            <i className="fa-solid fa-star me-2"></i>
                                            <i className="fa-solid fa-star me-2 text-dark"></i>
                                        </span>

                                        <h6>
                                            4.9 / 5 rating
                                        </h6>

                                        <small>
                                            Exporting crops
                                        </small>


                                    </article>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div>

                                {
                                    arrOfSupport.map((item, idx) => {
                                        return <article key={idx} className='d-flex justify-content-between align-items-start'>
                                            <div
                                                className='imgWrapper'
                                            >
                                                <img src={`${item.img}`} alt="" />

                                            </div>
                                            <aside>
                                                <h5> {item.name} </h5>
                                                <p> {item.desc} </p>
                                            </aside>
                                        </article>
                                    })
                                }



                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default Support