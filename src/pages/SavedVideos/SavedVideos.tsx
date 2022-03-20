import {useEffect, useState} from "react";

import VideosBar from "../../modules/VideosBar/VideosBar";
import LoadingAlert from "../../components/VideosBar/LoadingAlert";
import PaginationBar from "../../modules/PaginationBar/PaginationBar";
import {VideoService} from "../../services/VideoService/VideoService";
import {Video} from "../../interfaces/Video/Video";

const SavedVideos = () => {
    const [videoList, setVideoList] = useState(null as Video[] | null);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [pageItemsNumber, setPageItemsNumber] = useState(8);

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

    const getVideoList = () => {
        return videoList.slice((currentPageNumber - 1) * pageItemsNumber, currentPageNumber * pageItemsNumber);
    };

    return (
        <>
            <VideosBar videoList={getVideoList()}/>
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
