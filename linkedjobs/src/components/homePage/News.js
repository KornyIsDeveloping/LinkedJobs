import officeWork1 from '../../assets/officeWork1.jpg'
// import officeWork2 from '../../assets/officeWork.jpg'
// import remoteWork1 from '../../assets/officeWork.jpg'
// import remoteWork2 from '../../assets/officeWork.jpg'

const News = () => {
    return(
        <div className="news">
            <h1>Work Nowadays</h1>
            <p>In the office vs Remote</p>

            <div className="second-news">
                <div className="second-news-text">
                    <h2>Work in the office</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="second-news-image">
                <img alt="office work" src={officeWork1}/>
                </div>
            </div>
        </div>
    )
}

export default News;