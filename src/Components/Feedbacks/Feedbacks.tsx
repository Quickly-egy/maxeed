import React from 'react'
import './Feedbacks.css'

const Feedbacks = () => {
    return (
        <>

            <section className='feedBack'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <h1 className='text-white'>
                                    People are Saying About Maxed
                                </h1>

                                <p style={{
                                    color: '#b3b2b2'
                                }}>
                                    "Premium agricultural products with reliable service, timely global delivery, and guaranteed freshness meeting international standards."
                                </p>

                                <img className='my-4' src="/assets/imgs/Group 212.svg" alt="" />

                                <p style={{
                                    color: '#b3b2b2'
                                }}>
                                    "Premium agricultural products with reliable service, timely global delivery, and guaranteed freshness meeting international standards."
                                </p>


                                <div className='mt-5 clientsWrapper'>

                                    <img width={50} height={50} src="/assets/imgs/Ellipse 54.svg" alt="" />
                                    <img width={50} height={50} src="/assets/imgs/Ellipse 55.svg" alt="" />
                                    <img width={50} height={50} src="/assets/imgs/Ellipse 57.svg" alt="" />
                                    <img width={50} height={50} src="/assets/imgs/Ellipse 56.svg" alt="" />
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <form className='text-white w-75 m-auto'>

                                    <img className='d-block m-auto' src="/assets/imgs/healthicons_agriculture.svg" alt="" />
                                    <h3 className='my-3 text-center'>Get Started</h3>

                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="" id="email"
                                        className='mb-4 form-control'
                                        placeholder='Enter your email'

                                    />

                                    <label htmlFor="message">Message</label>
                                    {/* <textarea type="text"
                                        className='form-control'
                                    /> */}

                                    <textarea className='form-control'
                                        name="" id=""
                                        placeholder='What do you need?'
                                    >
                                    </textarea>

                                    <button className='btn btn-primary w-100 mt-2'>
                                        Request Demo
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