import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Support.css';

const Support = () => {
  const { t, i18n } = useTranslation();


  const [aboutData, setAboutData] = useState(null);


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' as RequestRedirect
    };

    fetch("http://localhost/dashboard/v1/api/about-section.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          // نفترض أنّ هناك سجلًا واحدًا:
          setAboutData(result.data[0]);
        } else {
          console.error("API returned success = false", result);
        }
      })
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);


  const arrOfSupport = aboutData ? [
    {
      name: i18n.language === 'ar'
        ? aboutData.section1_title_ar
        : aboutData.section1_title_en,
      desc: i18n.language === 'ar'
        ? aboutData.section1_description_ar
        : aboutData.section1_description_en,
      img: aboutData.section1_image
    },
    {
      name: i18n.language === 'ar'
        ? aboutData.section2_title_ar
        : aboutData.section2_title_en,
      desc: i18n.language === 'ar'
        ? aboutData.section2_description_ar
        : aboutData.section2_description_en,
      img: aboutData.section2_image
    },
    {
      name: i18n.language === 'ar'
        ? aboutData.section3_title_ar
        : aboutData.section3_title_en,
      desc: i18n.language === 'ar'
        ? aboutData.section3_description_ar
        : aboutData.section3_description_en,
      img: aboutData.section3_image
    },
    {
      name: i18n.language === 'ar'
        ? aboutData.section4_title_ar
        : aboutData.section4_title_en,
      desc: i18n.language === 'ar'
        ? aboutData.section4_description_ar
        : aboutData.section4_description_en,
      img: aboutData.section4_image
    }
  ] : [];

  return (
    <>
      <section
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
          fontFamily: i18n.language === 'ar'
            ? '"Cairo", sans-serif'
            : '"Poppins", serif'
        }}
        className='support'
      >
        <div className="container">
   
          {!aboutData ? (
            <p>Loading...</p>
          ) : (
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div>
                  <h1>
                 
                    {i18n.language === 'ar'
                      ? aboutData.main_title_ar
                      : aboutData.main_title_en
                    }
                  </h1>

                  <p className='my-4'>
                 
                    {i18n.language === 'ar'
                      ? aboutData.details_ar
                      : aboutData.details_en
                    }
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
                      
                        {aboutData.export_rating} / 5 {t("rating")}
                      </h6>

                      <small>
                        {t("exporting_crops")}
                      </small>
                    </article>

                    <article>
                      <span className='d-block text-warning'>
                        <i className="fa-solid fa-star me-2"></i>
                        <i className="fa-solid fa-star me-2"></i>
                        <i className="fa-solid fa-star me-2"></i>
                        <i className="fa-solid fa-star me-2 text-dark"></i>
                      </span>

                      <h6>
                        
                        {aboutData.fertilizer_rating} / 5 {t("rating")}
                      </h6>

                      <small>
                        {t("fertilizer_distribution")}
                      </small>
                    </article>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div>
                  {arrOfSupport.map((item, idx) => (
                    <article
                      key={idx}
                      className='d-flex justify-content-between align-items-start mb-4'
                    >
                      <div
                        className='imgWrapper'
                        style={{
                          marginLeft: i18n.language === 'ar' ? '20px' : '0'
                        }}
                      >
                        <img
                          src={item.img}
                          alt=""
                          style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                      </div>

                      <aside>
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                      </aside>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Support;
