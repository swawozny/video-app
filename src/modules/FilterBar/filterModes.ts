import {FilterMode} from "../../interfaces/FilterMode/FilterMode";
import {FilterType} from "../../interfaces/FilterMode/FilterType";
import {VideoService} from "../../services/VideoService/VideoService";

const filterModes: Map<FilterType, FilterMode> = new Map<FilterType, FilterMode>([
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
