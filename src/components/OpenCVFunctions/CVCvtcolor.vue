<template>
    <DisplaySheet :title="info.title" :subtitle="info.subtitle" :mat="mat" :loading="loading">
        <template #default>
            <v-card-text>
                <v-autocomplete label="色彩空间代码" :items="Object.keys(CvtCode)" v-model="SelectedCvtCode">
                </v-autocomplete>
            </v-card-text>
        </template>
    </DisplaySheet>
</template>

<script lang="ts" setup>
import { ref, watch, toRaw } from "vue";
import cv2 from "opencv-ts";
import type { Mat } from "opencv-ts";

import DisplaySheet from "../DisplaySheet.vue";
import { CvtCode } from "./ColorSpaceConversionCode";

const props = defineProps<{
    mat: Mat | undefined,
}>();

const info = {
    title: "CvtColor",
    subtitle: "色彩空间转换"
};

const SelectedCvtCode = ref<string>("BGR2GRAY");
const loading = ref<boolean>(false);

const render = (mat: Mat | undefined): Mat | undefined => {
    if (!mat) return undefined;

    loading.value = true;

    mat = toRaw(mat);

    const res: Mat = new cv2.Mat(mat.cols, mat.rows, cv2.CV_8UC4);
    
    try {
        cv2.cvtColor(mat, res, CvtCode[SelectedCvtCode.value]);
    } catch {
        SelectedCvtCode.value = "BGR2GRAY";
        cv2.cvtColor(mat, res, CvtCode[SelectedCvtCode.value]);
    }

    loading.value = false;

    return res;
};

const mat = ref<Mat | undefined>(render(props.mat));

watch(() => props.mat, (newVal) => {
    debugger;
    console.log("CVCvtcolor", props.mat, newVal);

    if (newVal != undefined) mat.value = render(newVal);
});

watch(SelectedCvtCode, (newVal) => {
    console.log("SelectedCvtCode", props.mat, newVal);
    mat.value = render(props.mat);
});




</script>