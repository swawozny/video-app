import {Video} from "../Video/Video";

export interface Mode {
    title: string;
    filterList: (list: Video[]) => Video[];
}
