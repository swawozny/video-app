import {PlatformType} from "../../interfaces/Platform/PlatformType";
import {YouTubeService} from "../../services/YouTubeService/YouTubeService";
import {VimeoService} from "../../services/VimeoService/VimeoService";
import {PlatformService} from "../../interfaces/PlatformService/PlatformService";

const videoPlatformTypes: Map<PlatformType, PlatformService> = new Map<PlatformType, PlatformService>( [
    [PlatformType.YOUTUBE, new YouTubeService()],
    [PlatformType.VIMEO, new VimeoService()]
]);

export default videoPlatformTypes;
