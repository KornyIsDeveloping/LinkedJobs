import Navbar from '../components/navbar/Navbar'
import QuotesSection from '../components/quotes/QuotesSection';

function HomePage() {
    return(
        <>
        <Navbar/>
        {/* generating all of the content from QuotesSection for all the pages */}
        <QuotesSection
        cName='quote'
        quoteImage='https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        quote='"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear."'
        author='- Nelson Mandela -'
        />
        </>
    )
}

export default HomePage;