import {Video} from "../Video/Video";

export interface FilterMode {
    title: string;
    filterList: (list: Video[]) => Video[];
}
