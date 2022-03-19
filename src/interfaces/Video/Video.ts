export interface Video {
    id: string;
    title: string;
    views: number | null;
    likes: number;
    thumbnail: string;
    publishedAt: string;
    playerEmbedUrl: string;
}
