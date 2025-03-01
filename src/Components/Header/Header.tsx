import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import 'animate.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();


  const [heroData, setHeroData] = useState<any>(null);


  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };

    fetch("http://localhost/dashboard/v1/api/hero.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {

          setHeroData(result.data[0]);
        } else {
          console.error("API returned success = false", result);
        }
      })
      .catch((error) => console.error("Error fetching hero data:", error));
  }, []);

  return (
    <>
      <header
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
          fontFamily: i18n.language === 'ar'
            ? '"Cairo", sans-serif'
            : '"Poppins", serif'
        }}
        className="home_header"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 animate__animated animate__fadeIn">
              <h1>
                {
                  heroData &&
                  (i18n.language === 'ar'
                    ? heroData.main_title_ar
                    : heroData.main_title_en
                  )
                }
              </h1>

              <h6 className="my-4 fs-4 fw-light">
                {
                  heroData &&
                  (i18n.language === 'ar'
                    ? heroData.details_ar
                    : heroData.details_en
                  )
                }
              </h6>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-dark px-4 me-4"
                  style={{ padding: '14px 28px' }}
                >
                  <Link
                    className="text-white text-decoration-none"
                    to={'/products'}
                  >
                    {t("HomeHeaderBtn")}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
