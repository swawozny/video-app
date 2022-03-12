import {Platform} from "../../interfaces/Platform/Platform";
import {FullYouTubeLinkService} from "../../services/FullYouTubeLinkService/FullYouTubeLinkService";

const videoPlatforms: Platform[] = [
    {
        id: 0,
        regex: "^((?:https?:)?\\/\\/)?((?:www|m)\\.)?youtube.com\\/watch\\?v=([a-zA-Z0-9\\_-]+)",
        linkService: new FullYouTubeLinkService()
    }
];

export default videoPlatforms;
