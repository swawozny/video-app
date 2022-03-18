import {VideoService} from "../VideoService/VideoService";
import {RegexService} from "../RegexService/RegexService";
import {VimeoService} from "../VimeoService/VimeoService";

export class VimeoLinkService {
    getVideoId(url: string) {
        const platform = VideoService.getVideoPlatform(url);
        if (platform) {
            return RegexService.getMatchingString(url, platform.regex, 1);
        }
        return "";
    }

    async checkVideoLink(url: string) {
        const videoId = this.getVideoId(url);
        const response = await new VimeoService().getVideoDetails(videoId);
        return response.status === 200;
    }
}
