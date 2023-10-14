import '../quotes/QuotesSection.css'

function QuotesSection(props) {
    return(
        <>
        <div className={props.cNane}>
            <img alt='relaxing' src={props.quoteImage}/>
        </div>
        <div className='home-quote'>
            <h1>{props.quote}</h1>
            <em>{props.author}</em>
        </div>
        </>
    )
}

export default QuotesSection;