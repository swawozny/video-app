import {useEffect, useState} from "react";

import VideosBar from "../../modules/VideosBar/VideosBar";
import LoadingAlert from "../../components/VideosBar/LoadingAlert";
import PaginationBar from "../../modules/PaginationBar/PaginationBar";
import FilterBar from "../../modules/FilterBar/FilterBar";
import {VideoService} from "../../services/VideoService/VideoService";
import {Video} from "../../interfaces/Video/Video";
import {FilterType} from "../../interfaces/FilterMode/FilterType";
import {SortingType} from "../../interfaces/FilterMode/SortingType";
import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";

const SavedVideos = () => {
    const [videoList, setVideoList] = useState(null as Video[] | null);
    const [videoChanged, setVideoChanged] = useState(false);

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [pageItemsNumber] = useState(3);

    const [filterType, setFilterType] = useState(FilterType.ALL as FilterType);
    const [sortingType, setSortingType] = useState(SortingType.NEWEST as SortingType);
    const [displayType, setDisplayType] = useState(DisplayType.TILE as DisplayType);

    useEffect(() => {
        VideoService.fetchAllVideos()
            .then(videos => setVideoList(videos.flat()))
            .catch(() => setVideoList(null));
    }, [videoChanged]);

    if (!videoList) {
        return (
            <LoadingAlert/>
        );
    }

    const getVideoList = () => {
        const filteredVideoList: Video[] = VideoService.getFilteredVideoList(videoList, filterType);
        return VideoService.getSortedVideoList(filteredVideoList, sortingType);
    };

    const getSlicedVideoList = () => {
        return getVideoList().slice((currentPageNumber - 1) * pageItemsNumber, currentPageNumber * pageItemsNumber);
    };

    return (
        <>
            <FilterBar
                filterType={filterType}
                setFilterType={setFilterType}
                sortingType={sortingType}
                setSortingType={setSortingType}
                setCurrentPageNumber={setCurrentPageNumber}
                displayType={displayType}
                setDisplayType={setDisplayType}
                videoChanged={videoChanged}
                setVideoChanged={setVideoChanged}
            />
            <VideosBar
                videoList={getSlicedVideoList()}
                videoChanged={videoChanged}
                setVideoChanged={setVideoChanged}
                displayType={displayType}
            />
            <PaginationBar
                listLength={getVideoList().length}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                pageItemsNumber={pageItemsNumber}
            />
        </>
    );
};

export default SavedVideos;
