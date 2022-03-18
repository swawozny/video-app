import {useEffect, useState} from "react";

import VideosBar from "../../modules/VideosBar/VideosBar";
import LoadingAlert from "../../components/VideosBar/LoadingAlert";
import {VideoService} from "../../services/VideoService/VideoService";
import {Video} from "../../interfaces/Video/Video";

const SavedVideos = () => {
    const [videoList, setVideoList] = useState(null as Video[] | null);

    useEffect(() => {
        VideoService.fetchAllVideos()
            .then(videos => setVideoList(videos.flat()))
            .catch(() => setVideoList(null));
    }, []);

    if (!videoList) {
        return (
            <LoadingAlert/>
        );
    }

    return (
        <>
            <VideosBar videoList={videoList}/>
        </>
    );
};

export default SavedVideos;
