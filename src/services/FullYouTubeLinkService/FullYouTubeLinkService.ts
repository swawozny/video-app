import {LinkService} from "../../interfaces/LinkService/LinkService";
import {YouTubeService} from "../YouTubeService/YouTubeService";
import {VideoService} from "../VideoService/VideoService";

export class FullYouTubeLinkService implements LinkService {
    getVideoId(url: string) {
        const platform = VideoService.getVideoPlatform(url);
        if (platform) {
            const matchStringArray = url.match(platform.expression);
            return matchStringArray ? matchStringArray[3] : "";
        }
        return "";
    }

    async checkVideoLink(url: string) {
        const videoId = this.getVideoId(url);
        const response = await YouTubeService.getVideoDetails(videoId);
        return response.data['items'].length > 0;
    }
}
