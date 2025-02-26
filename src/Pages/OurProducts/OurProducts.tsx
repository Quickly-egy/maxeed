import { useState } from 'react'
import './OurProducts.css'

const OurProducts = () => {






    const arrOfProducts = [
        {
            id: 100,
            img: 'assets/imgs/vegs (1).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',

        },
        {
            id: 200,
            img: '/assets/imgs/vegs.jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 300,
            img: '/assets/imgs/vegs (2).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (3).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 500,
            img: '/assets/imgs/vegs (4).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 600,
            img: '/assets/imgs/vegs (5).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (6).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (7).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (8).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (9).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (10).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (11).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (12).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (13).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (14).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (15).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (16).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (17).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (18).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'seeds',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (19).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (20).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'seeds',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (21).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (22).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'seeds',
        },
        {
            id: 400,
            img: '/assets/imgs/vegs (23).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'seeds',
        },


    ]
    const [filterdItems, setFilteredItems] = useState(arrOfProducts)

    const [isActive, setIsActive] = useState('all')


    const handelFilteredButtonClick: any = (app: never) => {
        console.log('trueeeeeeee');

        console.log('ana el app', app);


        let filters = arrOfProducts.filter((el: any) => el.type === app)
        console.log(filters);

        setFilteredItems(filters)

        setIsActive(app)

    }

    const [openIndex, setOpenIndex] = useState(null);



    return (
        <>

            <ul className='m-0 ps-5 py-3 border-bottom d-flex  list-unstyled'>

                <li className='me-4' >

                    <button
                        className={isActive === 'all' ? 'active' : ''}
                        onClick={() => {
                            handelFilteredButtonClick('all')
                            setFilteredItems(arrOfProducts)
                        }}> All </button>

                </li>

                <li className='me-4' >
                    <button
                        className={isActive === 'fresh' ? 'active' : ''}
                        onClick={() => { handelFilteredButtonClick('fresh') }} >
                        Fresh
                    </button>

                </li>
                <li className='me-4' >
                    <button
                        className={isActive === 'frozen' ? 'active' : ''}
                        onClick={() => { handelFilteredButtonClick('frozen') }} >

                        Frozen
                    </button>

                </li>
                <li className='me-4' >
                    <button
                        className={isActive === 'seeds' ? 'active' : ''}
                        onClick={() => { handelFilteredButtonClick('seeds') }} >
                        Seeds

                    </button>
                </li>
            </ul>

            <section className='ourProducts'>

                <div className="container">
                    <div className="row">

                        <div className=" col-lg-4">
                            <div className='d-flex flex-column align-items-start justify-content-between '>
                                <h1>
                                    Our products
                                </h1>
                                <p >
                                    We offer a diverse range of premium agricultural products, including fresh fruits, vegetables, grains, spices, and legumes, all meeting international quality standards."
                                    Let me know if you need further refinements!
                                </p>
                                <button className='btn btnGreen text-white px-5 py-3' >
                                    Get started
                                </button>
                            </div>
                        </div>

                        {

                            filterdItems.map((prod, idx: any) => {
                                return <div key={idx} className='col-6 col-lg-4 mb-4 '>
                                    <div className='position-relative '>
                                        <div
                                            style={{
                                                height: '300px'
                                            }}
                                            className='prodImgWrapper'
                                        >


                                            <img src={`${prod.img}`} className='w-100 h-100' alt="" />

                                        </div>
                                        <div className='overlay px-2 d-flex flex-column justify-content-evenly'>
                                            <div className='text-white text-center'>
                                                <h4 className='mb-0'>Fresh Vegitable and fruits</h4>
                                                <p className='mt-0'>Agricultural products</p>
                                            </div>

                                            {/* <small className='text-center d-block text-white'>
                                                {prod.desc}
                                            </small> */}

                                            <a className='text-white text-decoration-none d-flex align-items-center'
                                                style={{
                                                    paddingLeft: '30px'
                                                }}
                                                href='#'
                                                onClick={(e) => {
                                                    e.preventDefault(); // منع إعادة تحميل الصفحة
                                                    setOpenIndex(idx); // فتح التفاصيل للمنتج الحالي
                                                }}
                                            >
                                                Read More
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>

                                        {openIndex === idx && (
                                            <div className="product-details">
                                                <div className="details-content p-3">
                                                    <h5 className='fw-bold'>{prod.title}</h5>
                                                    <p >{prod.desc}</p>
                                                    <button className="btn  text-decoration-underline" onClick={() => setOpenIndex(null)}>
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        )}

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

export default OurProducts