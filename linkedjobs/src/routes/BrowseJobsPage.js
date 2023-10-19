import Navbar from '../components/navbar/Navbar'
import QuotesSection from '../components/quotes/QuotesSection';

function BrowseJobsPage() {
    return(
        <>
        <Navbar/>
        {/* generating all of the content from QuotesSection for all the pages */}
        <QuotesSection
        cName='quote'
        // quoteImage={AboutImg}
        quote='"A year from now you may wish you had started today."'
        author='- Karen Lamb -'
        />
        </>
    )
}

export default BrowseJobsPage;