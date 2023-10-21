<template>
    <v-container>
        <canvas ref="canvas" style="display: none"></canvas>
        <DragUpload></DragUpload>

        <v-sheet class="mx-auto pa-2 pt-6">
            <v-sheet color="grey" height="24" rounded="pill" width="88"></v-sheet>

            <v-slide-group show-arrows>
                <v-slide-group-item v-for="n in 15" :key="n">
                    <v-sheet :width="n === 1 ? 300 : 150" color="grey-darken-3" class="ma-3" height="200" rounded></v-sheet>
                </v-slide-group-item>
            </v-slide-group>

            <v-container fluid>
                <v-row>
                    <v-col v-for="n in 24" :key="n" cols="12" md="4">
                        <v-sheet color="grey-darken-3" height="200" rounded style=""></v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-container>
</template>
  
<script lang="ts">
import cv from "opencv-ts";
// import { ref } from "vue";
import DragUpload from "@/components/DragUpload.vue";
import { useSourceImg } from "@/stores/Sourceimg";

const cv2 = cv;

export default {
    data() {
        return {
            info: {
                OpenCVCoreLoading: true,
            },
            sourceimg: useSourceImg()
        };
    },
    mounted() {

        console.log(this.$refs.canvas);
        cv2.onRuntimeInitialized = () => {
            this.info.OpenCVCoreLoading = false;
            // this.sourceimg.$onAction((res) => {
            //     // if (res.name == "setSrc") {

            //     // }
            // });
        };
    },
    setup() {
    },
    components: {
        DragUpload
    }
};
</script>

<style scoped>
.footer {
    font-size: .9em;
}
</style>