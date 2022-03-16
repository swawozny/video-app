import {LinkService} from "../../interfaces/LinkService/LinkService";
import {YouTubeService} from "../YouTubeService/YouTubeService";
import {VideoService} from "../VideoService/VideoService";
import {RegexService} from "../RegexService/RegexService";

export class YouTubeLinkService implements LinkService {
    getVideoId(url: string) {
        const platform = VideoService.getVideoPlatform(url);
        if (platform) {
            return RegexService.getMatchingString(url, platform.regex, 3);
        }
        return "";
    }

    async checkVideoLink(url: string) {
        const videoId = this.getVideoId(url);
        const response = await new YouTubeService().getVideoDetails(videoId);
        return response.data['items'].length > 0;
    }
}
