<template>
    <v-container>
        <DragUpload></DragUpload>

        <v-sheet class="mx-auto pa-2 pt-6">
            <!-- <v-sheet color="grey" height="24" rounded="pill" width="88"></v-sheet> -->

            <!-- <v-slide-group show-arrows>
                <v-slide-group-item v-for="n in 15" :key="n">
                    <v-sheet :width="n === 1 ? 300 : 150" color="grey-darken-3" class="ma-3" height="200" rounded></v-sheet>
                </v-slide-group-item>
            </v-slide-group> -->

            <v-container fluid>
                <v-row>
                    <v-col v-for="(n, index) in functionList" :key="index" cols="12" md="4">
                        <component :is="n" :mat="(sourceimg.getMat as Mat)"></component>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-container>
</template>
  
<script lang="ts">
import { useSourceImg } from "@/stores/Sourceimg";
import DragUpload from "@/components/DragUpload.vue";

import { functionList } from "@/components/OpenCVFunctions/AllFunctions";
import type { Mat } from "opencv-ts";
import { toRaw } from "vue";

export default {
    data() {
        return {
            sourceimg: useSourceImg(),
            functionList,
            toRaw,
        };
    },
    mounted() {
        console.log(this.$refs.canvas);
    },
    setup() {

    },
    components: {
        DragUpload,
    }
};
</script>

<style scoped>
.footer {
    font-size: .9em;
}
</style>