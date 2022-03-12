import axios from 'axios';

export class YouTubeService {
    static getVideoDetails(videoId: string) {
        return axios.create({
            baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_YOUTUBE_SECRET_KEY
            }
        }).get('/videos', {
            params: {
                id: videoId
            }
        });
    }
}
