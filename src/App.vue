<template>
    <v-app id="inspire" theme="dark">

        <v-app-bar flat height="72">
            <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"></v-avatar>
            <v-avatar class="mx-2" color="surface-variant" size="32" variant="flat"></v-avatar>

            <v-btn class="me-2" color="grey" height="40" variant="flat" width="80"></v-btn>

            <v-btn class="me-2" color="grey" height="40" variant="flat" width="100"></v-btn>

            <v-btn class="me-2" color="grey" height="40" variant="flat" width="120"></v-btn>

            <v-btn class="me-2" color="grey" height="40" variant="flat" width="120"></v-btn>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-footer app color="black" class="footer" height="20">

            <template v-if="info.OpenCVCoreLoading">
                基于WASM的OpenCV内核加载中
            </template>
            <template v-else>
                <v-tooltip text="基于WASM的OpenCV内核加载成功">
                    <template v-slot:activator="{ props }">
                        <v-icon v-bind="props">mdi-check</v-icon>
                    </template>
                </v-tooltip>
            </template>

            <v-spacer></v-spacer>
        </v-footer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
  
<script lang="ts">
import cv2 from "opencv-ts";

export default {
    data() {
        return {
            info: {
                OpenCVCoreLoading: true,
            },
        };
    },
    mounted() {
        cv2.onRuntimeInitialized = () => {
            this.info.OpenCVCoreLoading = false;
            console.log("ok");
        };
    },
    setup() {
    },
};
</script>

<style scoped>
.footer {
    font-size: .9em;
}
</style>