import {LinkService} from "../LinkService/LinkService";

export interface Platform {
    id: number;
    expression: RegExp;
    linkService: LinkService;
}
