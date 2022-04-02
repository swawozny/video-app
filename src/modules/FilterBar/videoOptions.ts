import {TrashFill} from "react-bootstrap-icons";

import {VideoService} from "../../services/VideoService/VideoService";
import {VideoOption} from "../../interfaces/VideoOption/VideoOption";

const videoOptions: VideoOption[] = [
    {
        title: "Remove all videos",
        icon: TrashFill,
        onSubmit: () => VideoService.removeAllVideos()
    }
];

export default videoOptions;
