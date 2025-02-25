import './Home.css'
import Header from '../../Components/Header/Header'
import Support from '../../Components/Support/Support'
import OurPrograms from '../../Components/OurPrograms/OurPrograms'
import Feedbacks from '../../Components/Feedbacks/Feedbacks'
import Certificates from '../../Components/Certificates/Certificates'



const Home = () => {
    return (
        <>

            <Header />
            <Support />
            <OurPrograms />
            <Certificates />
            <Feedbacks />

        </>
    )
}

export default Home