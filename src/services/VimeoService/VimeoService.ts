import axios from "axios";

export class VimeoService {
    static getVideoDetails(videoId: string) {
        return axios.create({
            baseURL: process.env.REACT_APP_VIMEO_API_URL,
            headers: {"Authorization": `Bearer ${process.env.REACT_APP_VIMEO_ACCESS_TOKEN}`}
        }).get(`/videos/${videoId}`);
    }
}
