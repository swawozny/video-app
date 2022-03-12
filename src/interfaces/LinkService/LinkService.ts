export interface LinkService {
    getVideoId: (url: string) => string;
    checkVideoLink: (url: string) => Promise<boolean>;
}
