import Navbar from '../components/navbar/Navbar'
import QuotesSection from '../components/quotes/QuotesSection';

function HomePage() {
    return(
        <>
        <Navbar/>
        {/* generating all of the content from QuotesSection for all the pages */}
        <QuotesSection
        cName='quote'
        // quoteImage='https://64.media.tumblr.com/9660e93e840e24acb4576369d487e9a3/tumblr_oj1mn4AcF51qbg3s6o1_500.png'
        quote='"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear."'
        author='- Nelson Mandela -'
        />
        </>
    )
}

export default HomePage;