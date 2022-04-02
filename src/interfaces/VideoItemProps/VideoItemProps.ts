import {Video} from "../Video/Video";

export interface VideoItemProps {
    video: Video;
    videoIndex: number;
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
}
