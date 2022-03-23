export interface Video {
    id: string;
    platformId: number;
    title: string;
    link: string;
    views: number | null;
    likes: number;
    thumbnail: string;
    publishedAt: string;
    playerEmbedUrl: string;
}
