import Home from "./Home/Home";
import SavedVideos from "./SavedVideos/SavedVideos";
import {Page} from "../interfaces/Page/Page";

const pages: Page[] = [
    {
        title: "Home",
        path: "/",
        component: Home
    },
    {
        title: "Saved",
        path: "/saved-videos",
        component: SavedVideos
    }
];

export default pages;
