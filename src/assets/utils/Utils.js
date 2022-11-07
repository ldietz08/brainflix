import videos from "../data/videos.json"
import videoDetails from "../data/video-details.json";

// function to retrieve data 
// named exports 

export const getVideos= (videoId) => {
    return videos.filter((vid) => vid.id !== videoId)
};

const getVideoDetails = (videoId) => {
    return videoDetails.find((vid) => vid.id === videoId)
};


export default getVideoDetails; 

//Module in Node JS