import {LinkService} from "../LinkService/LinkService";

export interface Platform {
    id: number;
    regex: string;
    linkService: LinkService;
}
