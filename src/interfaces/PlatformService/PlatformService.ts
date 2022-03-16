import {Video} from "../Video/Video";

export interface PlatformService {
    getVideoDetails: (videoId: string) => Promise<any>;
    getVideoList: (videoIdList: string[]) => Promise<Video[]>;
}
