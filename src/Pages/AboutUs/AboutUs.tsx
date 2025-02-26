import './AboutUs.css'

const AboutUs = () => {

    const arrayOfArticles = [
        {
            imgUrl: '/assets/imgs/Vector.svg',
            title: 'Premium Quality',
            desc: 'We export fresh, high-quality agricultural products that meet international standards.',
        },
        {
            imgUrl: '/assets/imgs/codicon_workspace-trusted.svg',
            title: 'Certified & Reliable',
            desc: 'Our products are Global GAP, ISO, and HACCP certified for quality assurance.',
        },
        {
            imgUrl: '/assets/imgs/fluent_premium-28-filled.svg',
            title: 'Efficient Logistics',
            desc: 'Fast and secure global shipping ensures timely delivery.',
        },
        {
            imgUrl: '/assets/imgs/mdi_truck-fast-outline.svg',
            title: 'Trusted Experience',
            desc: 'With 17+ years in the industry, we are a leading name in agricultural exports.',
        },
    ]

    return (
        <>
            <section className='aboutUs'>
                <header className='d-flex justify-content-center align-items-center'>
                    <h1 className='text-white'>About Us</h1>
                </header>

                <section className='exporting'>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div>
                                    <h1>Exporting High-Quality Agricultural Products Worldwide</h1>
                                    <p>
                                        We specialize in providing fresh, premium agricultural products that meet international standards. With efficient logistics and reliable shipping, we ensure timely delivery to global markets, maintaining the highest levels of quality and freshness.
                                    </p>

                                    <div className='btnBox d-flex mt-4'>
                                        <button className='btn px-4 py-2 text-white me-4'>
                                            Contact Us <i className="fa-solid fa-chevron-right"></i>
                                        </button>

                                        <button className='btn'>
                                            Our Products <i className="fa-solid fa-chevron-right"
                                                style={{
                                                    color: 'rgba(96, 213, 66, 1)'
                                                }}
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 align-self-end">
                                <div className='imgWrapper position-relative'>
                                    <img className='d-block m-auto' src="/assets/imgs/Ellipse 1.svg" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='whyChooseUs'>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div>
                                    <h1>
                                        Why Choose Us
                                    </h1>

                                    <p>
                                        We provide premium agricultural products with guaranteed freshness, global certifications, and efficient shipping, ensuring reliability and excellence
                                    </p>
                                    <div className='mb-5'>
                                        <img src="/assets/imgs/Rectangle 160.svg" className='w-75 d-block' alt="" />

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div>

                                    {
                                        arrayOfArticles.map((item, idx) => {
                                            return <article key={idx} className='iconWrapper d-flex align-items-center mb-4 mb-lg-5'>
                                                <div>
                                                    <img className='me-3 rounded-4' src={item.imgUrl} alt="" />

                                                </div>

                                                <div className=''>

                                                    <h6 className='mb-2'> {item.title} </h6>
                                                    <p className='mb-0'> {item.desc} </p>
                                                </div>
                                            </article>
                                        })
                                    }


                                </div>
                            </div>




                        </div>

                        <div className="row text-center my-0 my-lg-5 py-5 footer">
                            <div className="col-lg-4">
                                <div>
                                    <h1>10k</h1>
                                    <h3>Trusted People</h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <h1>1528</h1>
                                    <h3>Types of crops</h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <h1>16k</h1>
                                    <h3>Export process</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}

export default AboutUs