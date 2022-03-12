import {Platform} from "../../interfaces/Platform/Platform";
import {YouTubeLinkService} from "../../services/YouTubeLinkService/YouTubeLinkService";
import {PlatformType} from "../../interfaces/Platform/PlatformType";
import {YouTubeVideoIdService} from "../../services/YouTubeVideoIdService/YouTubeVideoIdService";
import {VimeoLinkService} from "../../services/VimeoLinkService/VimeoLinkService";

const videoPlatforms: Platform[] = [
    {
        id: PlatformType.YOUTUBE,
        regex: "^((?:https?:)?\\/\\/)?((?:www|m)\\.)?youtube.com\\/watch\\?v=([a-zA-Z0-9\\_-]+)",
        linkService: new YouTubeLinkService()
    },
    {
        id: PlatformType.YOUTUBE,
        regex: "^((?:https?:)?\\/\\/)?((?:www|m)\\.)?youtu.be/([a-zA-Z0-9\\_-]+)",
        linkService: new YouTubeLinkService()
    },
    {
        id: PlatformType.YOUTUBE,
        regex: "([a-z0-9A-Z]{11})",
        linkService: new YouTubeVideoIdService()
    },
    {
        id: PlatformType.VIMEO,
        regex: "(?:http|https)?:?\\/?\\/?(?:www\\.)?(?:player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/(?:[^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)",
        linkService: new VimeoLinkService()
    }
];

export default videoPlatforms;
