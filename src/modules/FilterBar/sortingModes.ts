import {VideoService} from "../../services/VideoService/VideoService";
import {SortingType} from "../../interfaces/FilterMode/SortingType";
import {Mode} from "../../interfaces/FilterMode/Mode";

const sortingModes: Map<SortingType, Mode> = new Map<SortingType, Mode>([
    [
        SortingType.NEWEST,
        {
            title: "Date added (newest)",
            filterList: list => [...list]
                .sort((a, b) => VideoService.compareAddedDates(a, b))
        }
    ],
    [
        SortingType.OLDEST,
        {
            title: "Date added (oldest)",
            filterList: list => [...list]
                .sort((a, b) => VideoService.compareAddedDates(a, b))
                .reverse()
        }
    ]
]);

export default sortingModes;
