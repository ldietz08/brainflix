import videos from "../data/videos.json"
import videoDetails from "../data/video-details.json";

const getVideos= (videoId) => {
    return videos.filter((vid) => vid.id !== videoId)
};

export const getVideoDetails = (videoId) => {
    return videoDetails.find((vid) => vid.id === videoId)
};


export default getVideos; 