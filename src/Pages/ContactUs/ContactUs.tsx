import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <section
                className='contactUs d-flex'>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-9">
                            <div className='w-75'>
                                <form>
                                    <h1>Get in <span> Touch </span> </h1>
                                    <p>Have questions or need more details? Get in touch with us for inquiries, partnerships, or orders. Our team is ready to assist you with premium agricultural exports and reliable service.</p>

                                    <input type="text"
                                        placeholder='Name'
                                        className='form-control mb-3'
                                    />
                                    <input type="email"
                                        placeholder='Email'
                                        className='form-control mb-3'
                                    />
                                    <input type="text"
                                        placeholder='Phone number *'
                                        className='form-control mb-3'
                                    />
                                    <select className='form-control'
                                        name="" id="">
                                        <option value="">linkedIn</option>
                                        <option value="">linkedIn</option>
                                        <option value="">linkedIn</option>
                                    </select>

                                    <button className='btn'>
                                        send
                                    </button>

                                    <div className='socialBox d-flex align-items-start mt-5 justify-content-between'>
                                        <div className='d-flex '>
                                            <img src="/assets/imgs/Frame 831.svg" alt="" />
                                            <div>
                                                <h6>PHONE</h6>
                                                <span>01119986456</span>
                                            </div>
                                        </div>

                                        <div className='d-flex'>
                                            <img src="/assets/imgs/meteor-icons_whatsapp.svg" alt="" />
                                            <div>
                                                <h6>Whatsapp</h6>
                                                <span>01119986456</span>
                                            </div>
                                        </div>

                                        <div className='d-flex'>
                                            <img src="/assets/imgs/Frame 833.svg" alt="" />
                                            <div>
                                                <h6>EMAIL</h6>
                                                <span>info@maxed.com.au</span>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <aside className='position-relative '>
                    <img src="/assets/imgs/Rectangle 31.svg"

                        className='w-100' alt="" />

                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.9112305614312!2d31.3937486!3d30.137058699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458168acd5e4807%3A0xd71d6c300d29609d!2z2KzZiNiy2YrZgSDYqtmK2KrZiNiMINmC2LPZhSDYp9mE2YbYstmH2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e1!3m2!1sar!2seg!4v1740480329109!5m2!1sar!2seg" width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default ContactUs