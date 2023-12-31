import cv2 from "opencv-ts";

const rawData = {
    BGR2BGRA: 0,
    BGRA2BGR: 1,
    BGR2RGBA: 2,
    RGBA2BGR: 3,
    BGR2RGB: 4,
    BGRA2RGBA: 5,
    BGR2GRAY: 6,
    RGB2GRAY: 7,
    GRAY2BGR: 8,
    GRAY2BGRA: 9,
    BGRA2GRAY: 10,
    RGBA2GRAY: 11,
    BGR2BGR565: 12,
    RGB2BGR565: 13,
    BGR5652BGR: 14,
    BGR5652RGB: 15,
    BGRA2BGR565: 16,
    RGBA2BGR565: 17,
    BGR5652BGRA: 18,
    BGR5652RGBA: 19,
    GRAY2BGR565: 20,
    BGR5652GRAY: 21,
    BGR2BGR555: 22,
    RGB2BGR555: 23,
    BGR5552BGR: 24,
    BGR5552RGB: 25,
    BGRA2BGR555: 26,
    RGBA2BGR555: 27,
    BGR5552BGRA: 28,
    BGR5552RGBA: 29,
    GRAY2BGR555: 30,
    BGR5552GRAY: 31,
    BGR2XYZ: 32,
    RGB2XYZ: 33,
    XYZ2BGR: 34,
    XYZ2RGB: 35,
    BGR2YCrCb: 36,
    RGB2YCrCb: 37,
    YCrCb2BGR: 38,
    YCrCb2RGB: 39,
    BGR2HSV: 40,
    RGB2HSV: 41,
    BGR2Lab: 44,
    RGB2Lab: 45,
    BGR2Luv: 50,
    RGB2Luv: 51,
    BGR2HLS: 52,
    RGB2HLS: 53,
    HSV2BGR: 54,
    HSV2RGB: 55,
    Lab2BGR: 56,
    Lab2RGB: 57,
    Luv2BGR: 58,
    Luv2RGB: 59,
    HLS2BGR: 60,
    HLS2RGB: 61,
    BGR2HSV_FULL: 66,
    RGB2HSV_FULL: 67,
    BGR2HLS_FULL: 68,
    RGB2HLS_FULL: 69,
    HSV2BGR_FULL: 70,
    HSV2RGB_FULL: 71,
    HLS2BGR_FULL: 72,
    HLS2RGB_FULL: 73,
    LBGR2Lab: 74,
    LRGB2Lab: 75,
    LBGR2Luv: 76,
    LRGB2Luv: 77,
    Lab2LBGR: 78,
    Lab2LRGB: 79,
    Luv2LBGR: 80,
    Luv2LRGB: 81,
    BGR2YUV: 82,
    RGB2YUV: 83,
    YUV2BGR: 84,
    YUV2RGB: 85,
    YUV2RGB_NV12: 90,
    YUV2BGR_NV12: 91,
    YUV2RGB_NV21: 92,
    YUV2BGR_NV21: 93,
    YUV2RGBA_NV12: 94,
    YUV2BGRA_NV12: 95,
    YUV2RGBA_NV21: 96,
    YUV2BGRA_NV21: 97,
    YUV2RGB_YV12: 98,
    YUV2BGR_YV12: 99,
    YUV2RGB_IYUV: 100,
    YUV2BGR_IYUV: 101,
    YUV2RGBA_YV12: 102,
    YUV2BGRA_YV12: 103,
    YUV2RGBA_IYUV: 104,
    YUV2BGRA_IYUV: 105,
    YUV2GRAY_420: 106,
    YUV2RGB_UYVY: 107,
    YUV2BGR_UYVY: 108,
    YUV2RGBA_UYVY: 111,
    YUV2BGRA_UYVY: 112,
    YUV2RGB_YUY2: 115,
    YUV2BGR_YUY2: 116,
    YUV2RGB_YVYU: 117,
    YUV2BGR_YVYU: 118,
    YUV2RGBA_YUY2: 119,
    YUV2BGRA_YUY2: 120,
    YUV2RGBA_YVYU: 121,
    YUV2BGRA_YVYU: 122,
    YUV2GRAY_UYVY: 123,
    YUV2GRAY_YUY2: 124,
    RGBA2mRGBA: 125,
    mRGBA2RGBA: 126,
    RGB2YUV_I420: 127,
    BGR2YUV_I420: 128,
    RGBA2YUV_I420: 129,
    BGRA2YUV_I420: 130,
    RGB2YUV_YV12: 131,
    BGR2YUV_YV12: 132,
    RGBA2YUV_YV12: 133,
    BGRA2YUV_YV12: 134,
    BayerBG2BGR: 46,
    BayerGB2BGR: 47,
    BayerRG2BGR: 48,
    BayerGR2BGR: 49,
    BayerBG2GRAY: 86,
    BayerGB2GRAY: 87,
    BayerRG2GRAY: 88,
    BayerGR2GRAY: 89,
    BayerBG2BGR_VNG: 62,
    BayerGB2BGR_VNG: 63,
    BayerRG2BGR_VNG: 64,
    BayerGR2BGR_VNG: 65,
    BayerBG2BGR_EA: 135,
    BayerGB2BGR_EA: 136,
    BayerRG2BGR_EA: 137,
    BayerGR2BGR_EA: 138,
    BayerBG2BGRA: 139,
    BayerGB2BGRA: 140,
    BayerRG2BGRA: 141,
    BayerGR2BGRA: 142,
    RGB2YUV_UYVY: 143,
    BGR2YUV_UYVY: 144,
    RGBA2YUV_UYVY: 145,
    BGRA2YUV_UYVY: 146,
    RGB2YUV_YUY2: 147,
    BGR2YUV_YUY2: 148,
    RGB2YUV_YVYU: 149,
    BGR2YUV_YVYU: 150,
    RGBA2YUV_YUY2: 151,
    BGRA2YUV_YUY2: 152,
    RGBA2YUV_YVYU: 153,
    BGRA2YUV_YVYU: 154,
    COLORCVT_MAX: 155
};

export const CvtCode: {
    [key: string]: number;
} = {
    BGR2BGRA: 0,
    RGB2RGBA: rawData.BGR2BGRA,
    BGRA2BGR: 1,
    RGBA2RGB: rawData.BGRA2BGR,
    BGR2RGBA: 2,
    RGB2BGRA: rawData.BGR2RGBA,
    RGBA2BGR: 3,
    BGRA2RGB: rawData.RGBA2BGR,
    BGR2RGB: 4,
    RGB2BGR: rawData.BGR2RGB,
    BGRA2RGBA: 5,
    RGBA2BGRA: rawData.BGRA2RGBA,
    BGR2GRAY: 6,
    RGB2GRAY: 7,
    GRAY2BGR: 8,
    GRAY2RGB: rawData.GRAY2BGR,
    GRAY2BGRA: 9,
    GRAY2RGBA: rawData.GRAY2BGRA,
    BGRA2GRAY: 10,
    RGBA2GRAY: 11,
    BGR2BGR565: 12,
    RGB2BGR565: 13,
    BGR5652BGR: 14,
    BGR5652RGB: 15,
    BGRA2BGR565: 16,
    RGBA2BGR565: 17,
    BGR5652BGRA: 18,
    BGR5652RGBA: 19,
    GRAY2BGR565: 20,
    BGR5652GRAY: 21,
    BGR2BGR555: 22,
    RGB2BGR555: 23,
    BGR5552BGR: 24,
    BGR5552RGB: 25,
    BGRA2BGR555: 26,
    RGBA2BGR555: 27,
    BGR5552BGRA: 28,
    BGR5552RGBA: 29,
    GRAY2BGR555: 30,
    BGR5552GRAY: 31,
    BGR2XYZ: 32,
    RGB2XYZ: 33,
    XYZ2BGR: 34,
    XYZ2RGB: 35,
    BGR2YCrCb: 36,
    RGB2YCrCb: 37,
    YCrCb2BGR: 38,
    YCrCb2RGB: 39,
    BGR2HSV: 40,
    RGB2HSV: 41,
    BGR2Lab: 44,
    RGB2Lab: 45,
    BGR2Luv: 50,
    RGB2Luv: 51,
    BGR2HLS: 52,
    RGB2HLS: 53,
    HSV2BGR: 54,
    HSV2RGB: 55,
    Lab2BGR: 56,
    Lab2RGB: 57,
    Luv2BGR: 58,
    Luv2RGB: 59,
    HLS2BGR: 60,
    HLS2RGB: 61,
    BGR2HSV_FULL: 66,
    RGB2HSV_FULL: 67,
    BGR2HLS_FULL: 68,
    RGB2HLS_FULL: 69,
    HSV2BGR_FULL: 70,
    HSV2RGB_FULL: 71,
    HLS2BGR_FULL: 72,
    HLS2RGB_FULL: 73,
    LBGR2Lab: 74,
    LRGB2Lab: 75,
    LBGR2Luv: 76,
    LRGB2Luv: 77,
    Lab2LBGR: 78,
    Lab2LRGB: 79,
    Luv2LBGR: 80,
    Luv2LRGB: 81,
    BGR2YUV: 82,
    RGB2YUV: 83,
    YUV2BGR: 84,
    YUV2RGB: 85,
    YUV2RGB_NV12: 90,
    YUV2BGR_NV12: 91,
    YUV2RGB_NV21: 92,
    YUV2BGR_NV21: 93,
    YUV420sp2RGB: rawData.YUV2RGB_NV21,
    YUV420sp2BGR: rawData.YUV2BGR_NV21,
    YUV2RGBA_NV12: 94,
    YUV2BGRA_NV12: 95,
    YUV2RGBA_NV21: 96,
    YUV2BGRA_NV21: 97,
    YUV420sp2RGBA: rawData.YUV2RGBA_NV21,
    YUV420sp2BGRA: rawData.YUV2BGRA_NV21,
    YUV2RGB_YV12: 98,
    YUV2BGR_YV12: 99,
    YUV2RGB_IYUV: 100,
    YUV2BGR_IYUV: 101,
    YUV2RGB_I420: rawData.YUV2RGB_IYUV,
    YUV2BGR_I420: rawData.YUV2BGR_IYUV,
    YUV420p2RGB: rawData.YUV2RGB_YV12,
    YUV420p2BGR: rawData.YUV2BGR_YV12,
    YUV2RGBA_YV12: 102,
    YUV2BGRA_YV12: 103,
    YUV2RGBA_IYUV: 104,
    YUV2BGRA_IYUV: 105,
    YUV2RGBA_I420: rawData.YUV2RGBA_IYUV,
    YUV2BGRA_I420: rawData.YUV2BGRA_IYUV,
    YUV420p2RGBA: rawData.YUV2RGBA_YV12,
    YUV420p2BGRA: rawData.YUV2BGRA_YV12,
    YUV2GRAY_420: 106,
    YUV2GRAY_NV21: rawData.YUV2GRAY_420,
    YUV2GRAY_NV12: rawData.YUV2GRAY_420,
    YUV2GRAY_YV12: rawData.YUV2GRAY_420,
    YUV2GRAY_IYUV: rawData.YUV2GRAY_420,
    YUV2GRAY_I420: rawData.YUV2GRAY_420,
    YUV420sp2GRAY: rawData.YUV2GRAY_420,
    YUV420p2GRAY: rawData.YUV2GRAY_420,
    YUV2RGB_UYVY: 107,
    YUV2BGR_UYVY: 108,
    YUV2RGB_Y422: rawData.YUV2RGB_UYVY,
    YUV2BGR_Y422: rawData.YUV2BGR_UYVY,
    YUV2RGB_UYNV: rawData.YUV2RGB_UYVY,
    YUV2BGR_UYNV: rawData.YUV2BGR_UYVY,
    YUV2RGBA_UYVY: 111,
    YUV2BGRA_UYVY: 112,
    YUV2RGBA_Y422: rawData.YUV2RGBA_UYVY,
    YUV2BGRA_Y422: rawData.YUV2BGRA_UYVY,
    YUV2RGBA_UYNV: rawData.YUV2RGBA_UYVY,
    YUV2BGRA_UYNV: rawData.YUV2BGRA_UYVY,
    YUV2RGB_YUY2: 115,
    YUV2BGR_YUY2: 116,
    YUV2RGB_YVYU: 117,
    YUV2BGR_YVYU: 118,
    YUV2RGB_YUYV: rawData.YUV2RGB_YUY2,
    YUV2BGR_YUYV: rawData.YUV2BGR_YUY2,
    YUV2RGB_YUNV: rawData.YUV2RGB_YUY2,
    YUV2BGR_YUNV: rawData.YUV2BGR_YUY2,
    YUV2RGBA_YUY2: 119,
    YUV2BGRA_YUY2: 120,
    YUV2RGBA_YVYU: 121,
    YUV2BGRA_YVYU: 122,
    YUV2RGBA_YUYV: rawData.YUV2RGBA_YUY2,
    YUV2BGRA_YUYV: rawData.YUV2BGRA_YUY2,
    YUV2RGBA_YUNV: rawData.YUV2RGBA_YUY2,
    YUV2BGRA_YUNV: rawData.YUV2BGRA_YUY2,
    YUV2GRAY_UYVY: 123,
    YUV2GRAY_YUY2: 124,
    YUV2GRAY_Y422: rawData.YUV2GRAY_UYVY,
    YUV2GRAY_UYNV: rawData.YUV2GRAY_UYVY,
    YUV2GRAY_YVYU: rawData.YUV2GRAY_YUY2,
    YUV2GRAY_YUYV: rawData.YUV2GRAY_YUY2,
    YUV2GRAY_YUNV: rawData.YUV2GRAY_YUY2,
    RGBA2mRGBA: 125,
    mRGBA2RGBA: 126,
    RGB2YUV_I420: 127,
    BGR2YUV_I420: 128,
    RGB2YUV_IYUV: rawData.RGB2YUV_I420,
    BGR2YUV_IYUV: rawData.BGR2YUV_I420,
    RGBA2YUV_I420: 129,
    BGRA2YUV_I420: 130,
    RGBA2YUV_IYUV: rawData.RGBA2YUV_I420,
    BGRA2YUV_IYUV: rawData.BGRA2YUV_I420,
    RGB2YUV_YV12: 131,
    BGR2YUV_YV12: 132,
    RGBA2YUV_YV12: 133,
    BGRA2YUV_YV12: 134,
    BayerBG2BGR: 46,
    BayerGB2BGR: 47,
    BayerRG2BGR: 48,
    BayerGR2BGR: 49,
    BayerRGGB2BGR: rawData.BayerBG2BGR,
    BayerGRBG2BGR: rawData.BayerGB2BGR,
    BayerBGGR2BGR: rawData.BayerRG2BGR,
    BayerGBRG2BGR: rawData.BayerGR2BGR,
    BayerRGGB2RGB: rawData.BayerRG2BGR,
    BayerGRBG2RGB: rawData.BayerGR2BGR,
    BayerBGGR2RGB: rawData.BayerBG2BGR,
    BayerGBRG2RGB: rawData.BayerGB2BGR,
    BayerBG2RGB: rawData.BayerRG2BGR,
    BayerGB2RGB: rawData.BayerGR2BGR,
    BayerRG2RGB: rawData.BayerBG2BGR,
    BayerGR2RGB: rawData.BayerGB2BGR,
    BayerBG2GRAY: 86,
    BayerGB2GRAY: 87,
    BayerRG2GRAY: 88,
    BayerGR2GRAY: 89,
    BayerRGGB2GRAY: rawData.BayerBG2GRAY,
    BayerGRBG2GRAY: rawData.BayerGB2GRAY,
    BayerBGGR2GRAY: rawData.BayerRG2GRAY,
    BayerGBRG2GRAY: rawData.BayerGR2GRAY,
    BayerBG2BGR_VNG: 62,
    BayerGB2BGR_VNG: 63,
    BayerRG2BGR_VNG: 64,
    BayerGR2BGR_VNG: 65,
    BayerRGGB2BGR_VNG: rawData.BayerBG2BGR_VNG,
    BayerGRBG2BGR_VNG: rawData.BayerGB2BGR_VNG,
    BayerBGGR2BGR_VNG: rawData.BayerRG2BGR_VNG,
    BayerGBRG2BGR_VNG: rawData.BayerGR2BGR_VNG,
    BayerRGGB2RGB_VNG: rawData.BayerRG2BGR_VNG,
    BayerGRBG2RGB_VNG: rawData.BayerGR2BGR_VNG,
    BayerBGGR2RGB_VNG: rawData.BayerBG2BGR_VNG,
    BayerGBRG2RGB_VNG: rawData.BayerGB2BGR_VNG,
    BayerBG2RGB_VNG: rawData.BayerRG2BGR_VNG,
    BayerGB2RGB_VNG: rawData.BayerGR2BGR_VNG,
    BayerRG2RGB_VNG: rawData.BayerBG2BGR_VNG,
    BayerGR2RGB_VNG: rawData.BayerGB2BGR_VNG,
    BayerBG2BGR_EA: 135,
    BayerGB2BGR_EA: 136,
    BayerRG2BGR_EA: 137,
    BayerGR2BGR_EA: 138,
    BayerRGGB2BGR_EA: rawData.BayerBG2BGR_EA,
    BayerGRBG2BGR_EA: rawData.BayerGB2BGR_EA,
    BayerBGGR2BGR_EA: rawData.BayerRG2BGR_EA,
    BayerGBRG2BGR_EA: rawData.BayerGR2BGR_EA,
    BayerRGGB2RGB_EA: rawData.BayerRG2BGR_EA,
    BayerGRBG2RGB_EA: rawData.BayerGR2BGR_EA,
    BayerBGGR2RGB_EA: rawData.BayerBG2BGR_EA,
    BayerGBRG2RGB_EA: rawData.BayerGB2BGR_EA,
    BayerBG2RGB_EA: rawData.BayerRG2BGR_EA,
    BayerGB2RGB_EA: rawData.BayerGR2BGR_EA,
    BayerRG2RGB_EA: rawData.BayerBG2BGR_EA,
    BayerGR2RGB_EA: rawData.BayerGB2BGR_EA,
    BayerBG2BGRA: 139,
    BayerGB2BGRA: 140,
    BayerRG2BGRA: 141,
    BayerGR2BGRA: 142,
    BayerRGGB2BGRA: rawData.BayerBG2BGRA,
    BayerGRBG2BGRA: rawData.BayerGB2BGRA,
    BayerBGGR2BGRA: rawData.BayerRG2BGRA,
    BayerGBRG2BGRA: rawData.BayerGR2BGRA,
    BayerRGGB2RGBA: rawData.BayerRG2BGRA,
    BayerGRBG2RGBA: rawData.BayerGR2BGRA,
    BayerBGGR2RGBA: rawData.BayerBG2BGRA,
    BayerGBRG2RGBA: rawData.BayerGB2BGRA,
    BayerBG2RGBA: rawData.BayerRG2BGRA,
    BayerGB2RGBA: rawData.BayerGR2BGRA,
    BayerRG2RGBA: rawData.BayerBG2BGRA,
    BayerGR2RGBA: rawData.BayerGB2BGRA,
    RGB2YUV_UYVY: 143,
    BGR2YUV_UYVY: 144,
    RGB2YUV_Y422: rawData.RGB2YUV_UYVY,
    BGR2YUV_Y422: rawData.BGR2YUV_UYVY,
    RGB2YUV_UYNV: rawData.RGB2YUV_UYVY,
    BGR2YUV_UYNV: rawData.BGR2YUV_UYVY,
    RGBA2YUV_UYVY: 145,
    BGRA2YUV_UYVY: 146,
    RGBA2YUV_Y422: rawData.RGBA2YUV_UYVY,
    BGRA2YUV_Y422: rawData.BGRA2YUV_UYVY,
    RGBA2YUV_UYNV: rawData.RGBA2YUV_UYVY,
    BGRA2YUV_UYNV: rawData.BGRA2YUV_UYVY,
    RGB2YUV_YUY2: 147,
    BGR2YUV_YUY2: 148,
    RGB2YUV_YVYU: 149,
    BGR2YUV_YVYU: 150,
    RGB2YUV_YUYV: rawData.RGB2YUV_YUY2,
    BGR2YUV_YUYV: rawData.BGR2YUV_YUY2,
    RGB2YUV_YUNV: rawData.RGB2YUV_YUY2,
    BGR2YUV_YUNV: rawData.BGR2YUV_YUY2,
    RGBA2YUV_YUY2: 151,
    BGRA2YUV_YUY2: 152,
    RGBA2YUV_YVYU: 153,
    BGRA2YUV_YVYU: 154,
    RGBA2YUV_YUYV: rawData.RGBA2YUV_YUY2,
    BGRA2YUV_YUYV: rawData.BGRA2YUV_YUY2,
    RGBA2YUV_YUNV: rawData.RGBA2YUV_YUY2,
    BGRA2YUV_YUNV: rawData.BGRA2YUV_YUY2,
    COLORCVT_MAX: 155
};