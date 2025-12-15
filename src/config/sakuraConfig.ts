import type { SakuraConfig } from "../types/config";

export const sakuraConfig: SakuraConfig = {
    enable: true,
    sakuraNum: 10, // 少量樱花
    limitTimes: -1,
    size: {
        min: 0.3,
        max: 0.8, // 较小的樱花
    },
    opacity: {
        min: 0.2,
        max: 0.7, // 较低的透明度
    },
    speed: {
        horizontal: {
            min: -1.0,
            max: -0.5,
        },
        vertical: {
            min: 2.0,
            max: 3.0, // 较快的飘落
        },
        rotation: 0.05,
        fadeSpeed: 0.05, // 较快的消失
    },
    zIndex: 100,
};