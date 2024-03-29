import './News.css'
import officeWork1 from '../../assets/officeWork1.jpg'
import officeWork2 from '../../assets/officeWork2.jpg'
// import remoteWork1 from '../../assets/remoteWork1.jpg'
// import remoteWork2 from '../../assets/remoteWork2.jpg'

const News = () => {
    return(
        <div className="news">
            <h1>Work Nowadays</h1>
            <em>In the office vs remote</em>

            <div className="first-news">
                <div className="first-news-images">
                    <img alt="office work" src={officeWork1}/>
                    <img alt="office work" src={officeWork2}/>
                </div>

                <div className="first-news-text">
                    <h2>Work in the office</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default News;