import {Platform} from "../../interfaces/Platform/Platform";
import {VideoLink} from "../../interfaces/VideoLink/VideoLink";
import {Video} from "../../interfaces/Video/Video";
import videoPlatformTypes from "../../modules/SearchBar/videoPlatformTypes";
import videoPlatforms from "../../modules/SearchBar/videoPlatforms";

export class VideoService {
    static getVideoId(url: string) {
        const platform = this.getVideoPlatform(url);

        if (platform) {
            return platform.linkService.getVideoId(url);
        }
        return "";
    }

    static checkVideo(list: VideoLink[], newVideo: VideoLink) {
        if (newVideo.platformId === -1) {
            return false;
        }
        return !list.some(video => video.id === newVideo.id && video.platformId === newVideo.platformId);
    }

    static getVideoListFromStorage() {
        const actualVideoList = localStorage.getItem("videoList");
        return actualVideoList ? JSON.parse(actualVideoList) : [];
    }

    static getVideoObject(videoUrl: string) {
        const platform = this.getVideoPlatform(videoUrl);
        const videoId = this.getVideoId(videoUrl);

        return {
            id: videoId,
            platformId: platform ? platform.id : -1,
        };
    }

    static addVideo(videoUrl: string) {
        const list: VideoLink[] = this.getVideoListFromStorage();
        const newVideo: VideoLink = this.getVideoObject(videoUrl);
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

    static initGroupedList(list: string[][]) {
        videoPlatformTypes.forEach((_, platformType) => {
            list[platformType] = [];
        });
    }

    static groupListByPlatformId(videoLinkList: VideoLink[], groupedVideoLinkList: string[][]) {
        videoLinkList.forEach(
            videoLink => {
                if (!groupedVideoLinkList[videoLink.platformId]) {
                    groupedVideoLinkList[videoLink.platformId] = [];
                }
                groupedVideoLinkList[videoLink.platformId].push(videoLink.id);
            }
        );
    }

    static getGroupedVideoLinks(list: VideoLink[]) {
        let groupedVideoLinkList: string[][] = [];

        this.initGroupedList(groupedVideoLinkList);
        this.groupListByPlatformId(list, groupedVideoLinkList);

        return groupedVideoLinkList;
    }

    static fetchAllVideos() {
        const videoLinkList: VideoLink[] = this.getVideoListFromStorage();
        const groupedVideoLinkList: string[][] = this.getGroupedVideoLinks(videoLinkList);
        const promises: Promise<Video[]>[] = [];

        videoPlatformTypes.forEach((platformService, platformType) => {
            const platformVideoLinks: string[] = groupedVideoLinkList[platformType];
            if (platformVideoLinks.length > 0) {
                promises.push(platformService.getVideoList(platformVideoLinks));
            }
        });

        return Promise.all(promises);
    }
}
