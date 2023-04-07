import { type Addon } from "../types";

const addon: Addon = {
    title: "Blender",
    description:
        "Blender is a free, open-source, and user-friendly 3D creation suite for artists.",
    docs: {
        user: "artist_hosts_blender",
        admin: "admin_hosts_blender",
    },
    features: ["workfiles", "loader"],
    families: [
        "model",
        "rig",
        "layout",
        "animation",
        "camera",
        "layout",
        "review",
        "pointcache",
    ],
    icon: "blender-icon.png",
    github: "https://github.com/ynput/ayon-addons/tree/main/blender/dev",
};

export default addon;