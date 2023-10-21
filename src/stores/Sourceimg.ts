import { defineStore } from "pinia";
import type { Mat } from "opencv-ts";
import { toRaw } from "vue";


export const useSourceImg = defineStore("srcimg", {
    state: () => {
        return {
            // src: "",
            // canvasElement: undefined as HTMLCanvasElement | undefined,
            cvMat: { mat: undefined } as { mat: Mat | undefined }
        };
    },
    getters: {
        getMat(): Mat | undefined {
            console.log(this.cvMat);
            return toRaw(this.cvMat).mat;
        }
    },
    actions: {
        // setSrc(src: string) {
        //     this.src = src;
        // },
        // setCanvas(_canvas: HTMLCanvasElement) {
        //     this.canvasElement = _canvas;
        // },
        setMat(_mat: Mat) {
            console.log("pinia set Mat 1", _mat);
            this.cvMat = { mat: _mat };
            console.log("pinia set Mat 2", _mat);
        }
    }
});