import axios from "axios";

import {PlatformService} from "../../interfaces/PlatformService/PlatformService";
import {ParamsService} from "../ParamsService/ParamsService";
import {Video} from "../../interfaces/Video/Video";
import {PlatformType} from "../../interfaces/Platform/PlatformType";

export class VimeoService implements PlatformService {
    headers = {"Authorization": `Bearer ${process.env.REACT_APP_VIMEO_ACCESS_TOKEN}`};

    getVideoDetails(videoId: string) {
        return axios.create({
            baseURL: process.env.REACT_APP_VIMEO_API_URL,
            headers: this.headers
        }).get(`/videos/${videoId}`);
    }

    getEmbedUrl(playerEmbedUrl: string) {
        return `${playerEmbedUrl}&autoplay=1`;
    }

    getVideoId(videoUri: string) {
        return videoUri.split('/').at(2);
    }

    mapItemToVideo(item: any) {
        return {
            id: this.getVideoId(item.uri),
            platformId: PlatformType.VIMEO,
            title: item.name,
            views: null,
            likes: item.metadata.connections.likes.total,
            thumbnail: item.pictures.base_link,
            publishedAt: item.release_time,
            playerEmbedUrl: this.getEmbedUrl(item.player_embed_url)
        } as Video;
    }

    getListWithPrefixes(list: string[]) {
        return list.map(id => {
            return `/videos/${id}`;
        });
    }

    getVideoList(videoIdList: string[]) {
        return axios.create({
            baseURL: process.env.REACT_APP_VIMEO_API_URL,
            headers: this.headers,
            params: {
                uris: this.getListWithPrefixes(videoIdList),
            },
            paramsSerializer: params => new ParamsService().serializeParams(params)
        }).get(`/videos`)
            .then(response => {
                return response.data.data.map((item: any) => {
                    return this.mapItemToVideo(item);
                });
            })
            .catch(() => {
                return [];
            });
    }
}
