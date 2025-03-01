import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './Certificates.css';

const Certificates = () => {
    const { t, i18n } = useTranslation();
    const [certificates, setCertificates] = useState([]);
    
    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await fetch("http://localhost/dashboard/v1/api/certificate.php");
                const data = await response.json();
                if (data.success) {
                    setCertificates(data.certificates);
                }
            } catch (error) {
                console.error("Error fetching certificates:", error);
            }
        };

        fetchCertificates();
    }, []);
    
    return (
        <section
            style={{
                direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'
            }}
            className='certificates'>
            <div className="container">
                <h1 className='fw-bold'>{t("certificate")}</h1>
                <p>{t("certificate_desc")}</p>
                <div className="row justify-content-md-center">
                    {certificates.map((item, idx) => (
                        <div key={idx} className="col-6 col-lg-2">
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
                                    <img className='d-block mb-2' src={item.image_url} alt={item.name_en} />
                                </div>
                                <h6 className='fw-bold'>
                                    {i18n.language === 'ar' ? item.name_ar : item.name_en}
                                </h6>
                                <small>
                                    {i18n.language === 'ar' ? item.desc_ar : item.desc_en}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
