import {Mode} from "../../interfaces/FilterMode/Mode";
import {FilterType} from "../../interfaces/FilterMode/FilterType";
import {VideoService} from "../../services/VideoService/VideoService";

const filterModes: Map<FilterType, Mode> = new Map<FilterType, Mode>([
    [
        FilterType.ALL,
        {
            title: "Show all videos",
            filterList: list => list
        }
    ],
    [
        FilterType.LIKED,
        {
            title: "Show liked videos",
            filterList: list => list.filter(video => VideoService.isVideoFavorite(video))
        }
    ],
    [
        FilterType.NOT_LIKED,
        {
            title: "Show unliked videos",
            filterList: list => list.filter(video => !VideoService.isVideoFavorite(video))
        }
    ]
]);

export default filterModes;
