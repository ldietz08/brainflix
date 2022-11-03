import "./mainContent.scss";

function MainContent() {
    return (
        <>
        <main className="mainVideo">
            <video className="mainVideo__content" controls poster="">
            </video>
        </main>
        <div className="video__description">
            <h1 className="video__title">BMX Rampage: 2021 Highlights</h1>
            <div className="video__details-wrapper">
                <div className="video__details-container">
                    <div className="video__details">
                        <span className="video__details-creator">By Red Crow</span>
                    </div>
                    <div className="video__details">
                        <span className="video__details-date">07/11/2021</span>
                    </div>
                </div>
                <div className="video__metrics-container">
                    <div className="video__metrics">
                        <img className="video__metrics-views-img" 
                            src="../../assets/icons/views.svg" alt="Eye symbol"></img>
                        <span className="video__metrics-views">1,001,023</span>
                    </div>
                    <div>
                        <img className="video__metrics-likes-img" 
                            src="../../assets/icons/likes.svg" alt="Heart symbol"></img>
                        <span className="video__metrics-likes">110,985</span>
                    </div>
                </div>
            </div>
            <div className="video__description-container">
                <p className="video__description-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In id felis et libero feugiat hendrerit eget in purus. 
                    Donec ullamcorper volutpat felis, non rhoncus dui imperdiet 
                    vitae. Nullam cursus elit massa, sit amet ultricies est auctor 
                    dignissim. Integer euismod tellus.  
                </p>
            </div>
        </div>
        </>
     );
}

export default MainContent;