import {LinkService} from "../LinkService/LinkService";
import {PlatformType} from "./PlatformType";

export interface Platform {
    id: PlatformType;
    regex: string;
    linkService: LinkService;
}
