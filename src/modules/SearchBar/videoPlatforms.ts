import {Platform} from "../../interfaces/Platform/Platform";
import {YouTubeLinkService} from "../../services/YouTubeLinkService/YouTubeLinkService";
import {PlatformType} from "../../interfaces/Platform/PlatformType";

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
    }
];

export default videoPlatforms;
