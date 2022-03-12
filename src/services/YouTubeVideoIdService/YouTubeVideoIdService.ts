import {LinkService} from "../../interfaces/LinkService/LinkService";
import {YouTubeService} from "../YouTubeService/YouTubeService";
import {VideoService} from "../VideoService/VideoService";
import {RegexService} from "../RegexService/RegexService";

export class YouTubeVideoIdService implements LinkService {
    getVideoId(url: string) {
        const platform = VideoService.getVideoPlatform(url);
        if (platform) {
            return RegexService.getMatchingString(url, platform.regex, 0);
        }
        return "";
    }

    async checkVideoLink(url: string) {
        const youTubeVideoId = this.getVideoId(url);
        const response = await YouTubeService.getVideoDetails(youTubeVideoId);
        return response.status === 200;
    }
}
