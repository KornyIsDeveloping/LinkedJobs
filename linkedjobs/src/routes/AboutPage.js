import Navbar from '../components/navbar/Navbar'
import QuotesSection from '../components/quotes/QuotesSection';
// import AboutImg from '../assets/homeImage.jpg'

function AboutPage() {
    return(
        <>
        <Navbar/>
        {/* generating all of the content from QuotesSection for all the pages */}
        <QuotesSection
        cName='quote'
        // quoteImage={AboutImg}
        quote='"If you believe it will work, you will see opportunities. If you believe it would not, you will see obstacles."'
        author='- Wayne Dyer -'
        />
        </>
    )
}

export default AboutPage;