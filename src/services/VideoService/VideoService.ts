import {Video} from "../../interfaces/Video/Video";
import videoServices from "../../modules/SearchBar/videoServices";

export class VideoService {
    static addVideo(video: Video) {
        const actualVideoList = localStorage.getItem("videoList");
        let newVideoList = actualVideoList ? JSON.parse(actualVideoList) : [];
        if (newVideoList.indexOf(video) === -1) {
            newVideoList.push(video);
        }
        localStorage.setItem("videoList", JSON.stringify(newVideoList));
    }

    static getVideoServiceId(url: string) {
        for (const videoService of videoServices) {
            if (videoService.expression.test(url)) {
                return videoServices.indexOf(videoService);
            }
        }
        return -1;
    }
}
