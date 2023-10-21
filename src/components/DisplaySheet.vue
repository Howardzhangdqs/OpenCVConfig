<!-- 每个模块的模板 -->

<template>
    <v-sheet rounded>
        <div ref="card">
            <v-card color="grey-darken-3">
                <canvas ref="canvas"></canvas>
                <canvas ref="origin_canvas" style="display: none;"></canvas>
                <v-card-title>
                    {{ $props.title }}
                </v-card-title>
                <v-card-subtitle>
                    {{ $props.subtitle }}
                </v-card-subtitle>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-tooltip location="top" text="设置为目标图片">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon="mdi-download" variant="tonal" size="small"
                                @click="SetAsOriginMat" :disabled="!hasImg"></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip location="top" text="下载图片">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon="mdi-download" variant="tonal" size="small"
                                @click="OpenInNewTab(true)" :disabled="!hasImg"></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip location="top" text="在新标签页中打开图片">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon="mdi-open-in-new" variant="tonal" size="small"
                                @click="OpenInNewTab(false)" :disabled="!hasImg"></v-btn>
                        </template>
                    </v-tooltip>

                </v-card-actions>
                <slot name="default"></slot>
            </v-card>
        </div>
    </v-sheet>
</template>

<script lang="ts">
import cv2 from "opencv-ts";
import type * as CV2 from "opencv-ts";
import { toRaw } from "vue";
import { useSourceImg } from "@/stores/Sourceimg";

export default {
    props: {
        title: String,
        subtitle: String,
        mat: Object,
        loading: Boolean
    },
    data() {
        return {
            hasImg: false,
            sourceImg: useSourceImg(),
        };
    },
    mounted() {
        (this.$refs.canvas as HTMLCanvasElement).width = (this.$refs.card as HTMLCanvasElement).clientWidth;
        (this.$refs.canvas as HTMLCanvasElement).height = 0;

        window.addEventListener("resize", this.UpdateCanvasSize);
    },
    watch: {
        mat: {
            handler(newVal) {
                newVal = toRaw(newVal);
                console.log("watch", newVal);

                if (newVal !== undefined) {
                    this.UpdateCanvasSize();
                }

            },
            immediate: true,
        },
    },
    methods: {
        UpdateCanvasSize() {
            const canvas = toRaw(this.$refs.canvas) as HTMLCanvasElement;
            const card = toRaw(this.$refs.card) as HTMLDivElement;
            const mat = toRaw(this.$props.mat) as CV2.Mat;

            if (canvas && mat) {
                const matAspectRatio = mat.cols / mat.rows;

                canvas.width = card.clientWidth;
                canvas.height = card.clientWidth / matAspectRatio;

                const res: CV2.Mat = new cv2.Mat(mat.cols, mat.rows, cv2.CV_8UC4);

                cv2.resize(mat, res, new cv2.Size(card.clientWidth, card.clientWidth / matAspectRatio), 0, 0, cv2.INTER_LINEAR);
                cv2.imshow(canvas, res);

                this.hasImg = true;
            }
        },
        OpenInNewTab(download: boolean) {
            const canvas = this.$refs.origin_canvas as HTMLCanvasElement;
            const mat = toRaw(this.$props.mat) as CV2.Mat;

            canvas.width = mat.cols;
            canvas.height = mat.rows;

            cv2.imshow(canvas as HTMLCanvasElement, mat);

            canvas.toBlob((blob) => {
                if (!blob) return;
                console.log(blob);
                const fakedom = document.createElement("a");
                fakedom.href = URL.createObjectURL(blob);
                if (download) fakedom.setAttribute("download", "OpenCVConfig.png");
                fakedom.setAttribute("target", "_blank");
                fakedom.click();
                fakedom.remove();
            });
        },
        SetAsOriginMat() {
            console.log("Set as Origin 1", this.$props.mat,  toRaw(this.$props.mat));
            this.sourceImg.setMat(toRaw(this.$props.mat as CV2.Mat));
            console.log("Set as Origin 2", toRaw(this.$props.mat));
        },
    },
};
</script>