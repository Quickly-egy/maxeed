import { useState } from 'react'
import './OurProducts.css'
import { useTranslation } from 'react-i18next'

const OurProducts = () => {



    const [pdfFile, setPdfFile] = useState(null);



    const arrOfProducts = [
        {
            id: 100,
            details: 'product details',
            img: 'assets/imgs/vegs (1).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',

        },
        {
            id: 200,
            details: 'product details',
            img: '/assets/imgs/vegs.jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 300,
            details: 'product details',
            img: '/assets/imgs/vegs (2).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 400,
            details: 'product details',
            img: '/assets/imgs/vegs (3).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 500,
            details: 'product details',
            img: '/assets/imgs/vegs (4).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 600,
            details: 'product details',
            img: '/assets/imgs/vegs (5).jpg',
            title: 'Green Peas',
            color: 'Natural Green',
            size: '7 : 11 cm',
            borken_rate: '2% No black dots and no impurities',
            packing: '4: 5 kg / carton Or according to customer needs',
            desc: 'Agricultural products',
            shipping: 'Container 40 feet 22 ton',
            type: 'fresh',

        },
        {
            id: 700,
            details: 'product details',
            img: '/assets/imgs/vegs (6).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 800,
            details: 'product details',
            img: '/assets/imgs/vegs (7).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 900,
            details: 'product details',
            img: '/assets/imgs/vegs (8).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 1000,
            details: 'product details',
            img: '/assets/imgs/vegs (9).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 1100,
            details: 'product details',
            img: '/assets/imgs/vegs (10).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 1200,
            details: 'product details',
            img: '/assets/imgs/vegs (11).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 1300,
            details: 'product details',
            img: '/assets/imgs/vegs (12).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },

        {
            id: 1500,
            details: 'product details',
            img: '/assets/imgs/vegs (14).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 1600,
            details: 'product details',
            img: '/assets/imgs/vegs (15).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 1700,
            details: 'product details',
            img: '/assets/imgs/vegs (16).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 1800,
            details: 'product details',
            img: '/assets/imgs/vegs (17).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 1900,
            details: 'product details',
            img: '/assets/imgs/vegs (18).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 2000,
            details: 'product details',
            img: '/assets/imgs/vegs (19).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 2100,
            details: 'product details',
            img: '/assets/imgs/vegs (20).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
        },
        {
            id: 2200,
            details: 'product details',
            img: '/assets/imgs/vegs (21).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'frozen',
        },
        {
            id: 2300,
            details: 'product details',
            img: '/assets/imgs/vegs (22).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'forzen',
        },
        {
            id: 2400,
            details: 'product details',
            img: '/assets/imgs/vegs (23).jpg',
            title: 'Fresh Vegitable and fruits',
            desc: 'Agricultural products',
            type: 'fresh',
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


    const pdfUrl = "/assets/imgs/Fresh fruits & Vegetables maxeed.pdf";

    // const [openIndex, setOpenIndex] = useState(null);
    const { t, i18n } = useTranslation();


    // const handleFileChange = (event: any) => {
    //     const file = event.target.files[0];
    //     if (file && file.type === "application/pdf") {
    //         const fileURL = URL.createObjectURL(file);
    //         setPdfFile({ file, fileURL });
    //     } else {
    //         alert("Please upload a valid PDF file.");
    //         setPdfFile(null);
    //     }
    // };





    return (
        <>

            <ul
                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif',

                }}
                className='m-0 ps-5 py-3 border-bottom d-flex  list-unstyled  filter  '>

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
                    >
                        <div className="dropdown">
                            <a className="text-dark text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seeds
                            </a>

                            <ul className="dropdown-menu">
                                <li
                                    onClick={() => { handelFilteredButtonClick('seeds') }}
                                ><a className="dropdown-item" href="#">beans</a></li>
                                <li
                                    onClick={() => { handelFilteredButtonClick('seeds') }}
                                ><a className="dropdown-item" href="#">rice</a></li>
                                <li
                                    onClick={() => { handelFilteredButtonClick('seeds') }}
                                ><a className="dropdown-item" href="#">corn</a></li>
                            </ul>
                        </div>

                    </button>
                </li>
            </ul>

            <section
                style={{
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif',
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                }}
                className='ourProducts'>

                <div className="container">
                    <div className="row">

                        <div className=" col-lg-4">
                            <div className='d-flex flex-column align-items-start justify-content-between '>
                                <h1>
                                    {t("productsTitle")}
                                </h1>
                                <p >
                                    {t("productsDesc")}
                                </p>
                                <button className='btn btnGreen text-white px-5 mt-4 py-3' >
                                    <div className="">


                                        {/* عرض الـ PDF داخل الصفحة */}
                                        {/* <iframe src={pdfUrl}></iframe> */}

                                        {/* زر تحميل الملف */}
                                        <div className="">
                                            <a href={pdfUrl} download className="d-block fw-bold text-white text-black text-decoration-none">
                                                Download Catalogue
                                            </a>
                                        </div>
                                    </div>
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
                                                <h4 className='mb-0'>
                                                    {t("cardTitle")}

                                                </h4>
                                                <p className='mt-0'>
                                                    {t("cardSubTitle")}
                                                </p>
                                                <small className='d-block mt-5'> {prod.details} </small>
                                            </div>

                                            {/* <small className='text-center d-block text-white'>
                                                {prod.desc}
                                            </small> */}

                                            {/* 
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
                                            </a> */}

                                        </div>
                                        {/* 
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
                                        )} */}

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