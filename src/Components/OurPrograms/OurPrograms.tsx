import React from 'react'
import './OurPrograms.css'

const OurPrograms = () => {
    return (
        <>
            <section className='ourPrograms'>
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
                            Our Programs
                        </span>
                    </div>

                    <div className='text-center'>
                        <h1 className='my-4'>
                            Some of the services provided by our company
                        </h1>
                        <h6>
                            Comprehensive agricultural export solutions, including sourcing, quality control, packaging, logistics, and global distribution.
                        </h6>
                    </div>


                    <div className="row mt-4">

                        <div className="col-lg-4">
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
                                        Grains & Cereals: Premium wheat, rice, and corn.
                                    </small>
                                    <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>
                                        Fresh Produce: High-quality fruits.
                                    </small>
                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        Legumes & Spices: Finest pulses and spices.
                                    </small>

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4">
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
                                        Fertilizers: Enriching soil.
                                    </small>
                                    <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>
                                        Pesticides: Protecting crops.
                                    </small>
                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        Sustainability: Safe farming.
                                    </small>

                                </div>
                            </div>


                        </div>

                        <div className="col-lg-4">
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
                                        Seeds Production: High-quality, high-yield seeds.
                                    </small>
                                    <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>
                                        Hybrid Seeds: Enhanced growth and resistance.
                                    </small>
                                    <small className='bg-white d-block text-dark p-1 rounded-4 '>
                                        Organic Seeds: Natural and chemical-free.
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