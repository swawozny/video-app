import {useEffect, useState} from "react";

import VideosBar from "../../modules/VideosBar/VideosBar";
import LoadingAlert from "../../components/VideosBar/LoadingAlert";
import PaginationBar from "../../modules/PaginationBar/PaginationBar";
import {VideoService} from "../../services/VideoService/VideoService";
import {Video} from "../../interfaces/Video/Video";

const SavedVideos = () => {
    const [videoList, setVideoList] = useState(null as Video[] | null);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [pageItemsNumber] = useState(8);
    const [videoRemoved, setVideoRemoved] = useState(false);

    useEffect(() => {
        VideoService.fetchAllVideos()
            .then(videos => setVideoList(videos.flat()))
            .catch(() => setVideoList(null));
    }, [videoRemoved]);

    if (!videoList) {
        return (
            <LoadingAlert/>
        );
    }

    const getVideoList = () => {
        return videoList.slice((currentPageNumber - 1) * pageItemsNumber, currentPageNumber * pageItemsNumber);
    };

    const handleRemoveVideo = (video: Video) => {
        setVideoRemoved(!videoRemoved);
        VideoService.removeVideo(video);
    };

    return (
        <>
            <VideosBar
                videoList={getVideoList()}
                removeVideo={handleRemoveVideo}
            />
            <PaginationBar
                listLength={videoList.length}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                pageItemsNumber={pageItemsNumber}
            />
        </>
    );
};

export default SavedVideos;
