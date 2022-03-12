import {Platform} from "../../interfaces/Platform/Platform";
import videoPlatforms from "../../modules/SearchBar/videoPlatforms";
import {Video} from "../../interfaces/Video/Video";

export class VideoService {
    static getVideoId(url: string) {
        const platform = this.getVideoPlatform(url);
        if (platform) {
            return platform.linkService.getVideoId(url);
        }

        return "";
    }

    static checkVideo(list: Video[], newVideo: Video) {
        if (newVideo.platformId === -1) {
            return false;
        }
        return !list.some(video => video.id === newVideo.id && video.platformId === newVideo.platformId);
    }

    static getVideoList() {
        const actualVideoList = localStorage.getItem("videoList");
        return actualVideoList ? JSON.parse(actualVideoList) : [];
    }

    static getVideoObject(videoUrl: string) {
        const platform = this.getVideoPlatform(videoUrl);
        const videoId = this.getVideoId(videoUrl);

        return {
            id: videoId,
            platformId: platform ? platform.id : -1,
            dateAdded: new Date().toString()
        };
    }

    static addVideo(videoUrl: string) {
        const list: Video[] = this.getVideoList();
        const newVideo: Video = this.getVideoObject(videoUrl);

        let videoCanBeAdded: boolean = this.checkVideo(list, newVideo);

        if (videoCanBeAdded) {
            list.push(newVideo);
        }
        localStorage.setItem("videoList", JSON.stringify(list));
    }

    static getVideoPlatform(url: string) {
        for (const videoService of videoPlatforms) {
            if (RegExp(videoService.regex).test(url)) {
                return videoService;
            }
        }
        return null;
    }

    static checkLink(url: string) {
        const videoPlatform: Platform | null = this.getVideoPlatform(url);
        if (videoPlatform) {
            return videoPlatform.linkService.checkVideoLink(url);
        }
        return Promise.reject<boolean>(false);
    }
}
