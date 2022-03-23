import axios from 'axios';

import {PlatformService} from "../../interfaces/PlatformService/PlatformService";
import {ParamsService} from "../ParamsService/ParamsService";
import {Video} from "../../interfaces/Video/Video";
import {PlatformType} from "../../interfaces/Platform/PlatformType";

export class YouTubeService implements PlatformService {
    getVideoDetails(videoId: string) {
        return axios.create({
            baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_YOUTUBE_SECRET_KEY
            }
        })
            .get('/videos', {
                params: {
                    id: videoId
                }
            });
    }

    getEmbedUrl(videoId: string) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    getVideoLink(videoId: string) {
        return `https://www.youtube.com/watch?v=${videoId}`;
    }

    mapItemToVideo(item: any) {
        return {
            id: item.id,
            platformId: PlatformType.YOUTUBE,
            title: item.snippet.title,
            link: this.getVideoLink(item.id),
            views: Number(item.statistics.viewCount),
            likes: Number(item.statistics.likeCount),
            thumbnail: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            playerEmbedUrl: this.getEmbedUrl(item.id)
        } as Video
    }

    getVideoList(videoIdList: string[]) {
        return axios.create({
            baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
            params: {
                part: ['snippet', 'id', 'player', 'statistics'],
                key: process.env.REACT_APP_YOUTUBE_SECRET_KEY,
            },
            paramsSerializer: params => new ParamsService().serializeParams(params)
        }).get('/videos', {
            params: {
                id: videoIdList
            }
        }).then(response => {
            return response.data.items.map((item: any) => {
                return this.mapItemToVideo(item);
            });
        })
            .catch(() => {
                return [];
            });
    }
}
