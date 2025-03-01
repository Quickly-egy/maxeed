import { useTranslation } from 'react-i18next';
import './OurPrograms.css';
import { useState, useEffect } from 'react';

const OurPrograms = () => {
  const { t, i18n } = useTranslation();
  const [programsData, setProgramsData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };

    fetch("http://localhost/dashboard/v1/api/get_our_programs.php", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result.success) {
          setProgramsData(result.data);
        } else {
          setError("Failed to fetch programs data");
        }
      })
      .catch((error) => {
        console.error("Error fetching programs data:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }


  if (error) {
    return <div>Error: {error}</div>;
  }


  if (!programsData) {
    return <div>No data available</div>;
  }

  return (
    <>
      <section
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
          fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'
        }}
        className='ourPrograms'>
        <div className="container">
          <div style={{ width: 'fit-content' }} className='position-relative m-auto'>
            <span className='d-inline-block border border-1 rounded-5 m-auto' style={{ padding: '9px 32px 9px 70px' }}>
              <img className='position position-absolute start-0 top-0 bottom-0' src="/assets/imgs/Frame 7.svg" alt="" />
              {t("ourPrograms")}
            </span>
          </div>

          <div className='text-center'>
            <h1 className='my-4'>{i18n.language === 'ar' ? programsData.main_title_ar : programsData.main_title_en}</h1>
            <h6>{i18n.language === 'ar' ? programsData.details_ar : programsData.details_en}</h6>
          </div>

          <div className="row mt-4 justify-content-center">
       
            <div className="col-md-6 col-lg-4">
              <div className='imgWrapper position-relative'>
                <img src={programsData.card1_image} className='w-100' alt="" />
                <div className='transparentOverlay text-white ps-4 pt-5 pe-3'>
                  <h2>{i18n.language === 'ar' ? programsData.card1_number_ar : programsData.card1_number_en}</h2>
                  <h6>{i18n.language === 'ar' ? programsData.card1_subtitle_ar : programsData.card1_subtitle_en}</h6>
                  <small className='bg-white d-block text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card1_text1_ar : programsData.card1_text1_en}</small>
                  <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card1_text2_ar : programsData.card1_text2_en}</small>
                  <small className='bg-white d-block text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card1_text3_ar : programsData.card1_text3_en}</small>
                </div>
              </div>
            </div>

   
            <div className="col-md-6 col-lg-4">
              <div className='imgWrapper position-relative'>
                <img src={programsData.card2_image} className='w-100' alt="" />
                <div className='transparentOverlay text-white ps-4 pt-5 pe-3'>
                  <h2>{i18n.language === 'ar' ? programsData.card2_number_ar : programsData.card2_number_en}</h2>
                  <h6>{i18n.language === 'ar' ? programsData.card2_subtitle_ar : programsData.card2_subtitle_en}</h6>
                  <small className='bg-white d-block text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card2_text1_ar : programsData.card2_text1_en}</small>
                  <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card2_text2_ar : programsData.card2_text2_en}</small>
                  <small className='bg-white d-block text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card2_text3_ar : programsData.card2_text3_en}</small>
                </div>
              </div>
            </div>

         
            <div className="col-md-6 col-lg-4 mt-md-4 mt-lg-0">
              <div className='imgWrapper position-relative'>
                <img src={programsData.card3_image} className='w-100' alt="" />
                <div className='transparentOverlay text-white ps-4 pt-5 pe-3'>
                  <h2>{i18n.language === 'ar' ? programsData.card3_number_ar : programsData.card3_number_en}</h2>
                  <h6>{i18n.language === 'ar' ? programsData.card3_subtitle_ar : programsData.card3_subtitle_en}</h6>
                  <small className='bg-white d-block text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card3_text1_ar : programsData.card3_text1_en}</small>
                  <small className='bg-white d-block my-2 text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card3_text2_ar : programsData.card3_text2_en}</small>
                  <small className='bg-white d-block text-dark p-1 rounded-4 '>{i18n.language === 'ar' ? programsData.card3_text3_ar : programsData.card3_text3_en}</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurPrograms;
