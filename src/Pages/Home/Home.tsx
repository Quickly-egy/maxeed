import './Home.css'
import Header from '../../Components/Header/Header'
import Support from '../../Components/Support/Support'
import OurProducts from '../OurProducts/OurProducts'
import OurPrograms from '../../Components/OurPrograms/OurPrograms'
import Feedbacks from '../../Components/Feedbacks/Feedbacks'
import Certificates from '../../Components/Certificates/Certificates'



const Home = () => {
    return (
        <>

            <Header />
            <Support />
            {/* <OurProducts /> */}
            <OurPrograms />
            <Certificates />
            <Feedbacks />

        </>
    )
}

export default Home