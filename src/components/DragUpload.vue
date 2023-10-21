<template>
    <div>
        <div class="dropzone" @dragover="handleDragOver" @drop="handleDrop" @dragleave="handleDragLeave"
            @click="handleClick">
            <div class="dropinner">
                <p v-if="!file">
                    <v-icon class="ma-1" :icon='dragging ? "mdi-mouse" : "mdi-cloud-upload"' @dragover.prevent></v-icon>
                    {{ dragging ? "松开鼠标即可上传" : "将图片拖拽到此处或点击选择文件" }}
                </p>
                <img :src="file" v-else :style='{ opacity: (dragging ? "0.3" : "1") }' />
            </div>
        </div>
        <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*" />
    </div>
    
    <canvas ref="canvas" style="display: none;"></canvas>
</template>

<script lang="ts">
import { useSourceImg } from "@/stores/Sourceimg";
import cv2 from "opencv-ts";
import { toRaw } from "vue";

export default {
    data() {
        return {
            file: undefined as string | null | undefined,
            dragging: false,
            sourceImg: useSourceImg()
        };
    },
    methods: {
        handleDragOver(event: { preventDefault: () => void; }) {
            event.preventDefault();
            this.dragging = true;

            console.log("drag over");
        },
        handleDrop(payload: DragEvent) {
            payload.preventDefault();
            this.dragging = false;
            const file = payload.dataTransfer?.files[0];
            if (file) this.handleChange(file);

            console.log("drop");
        },
        handleDragLeave(event: { preventDefault: () => void; }) {
            event.preventDefault();
            this.dragging = false;

            console.log("drag leave");
        },
        handleFileChange(payload: Event) {
            const file = (payload.target as HTMLInputElement).files?.[0];
            if (file) {
                this.handleChange(file);
            }
        },
        handleClick() {
            (this.$refs.fileInput as HTMLInputElement).click();
        },
        handleChange(file: File) {
            const reader = new FileReader();
            reader.onload = (event) => {
                this.file = event.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    },
    watch: {
        file() {
            
            console.log("Drag file 0.0");

            if (! this.file) return;
            this.$emit("change", this.file);
            console.log("Drag file 0.1.0");
            // this.sourceImg.$state.src = toRaw(this.file) as string;
            console.log("Drag file 0.1");

            // 将图片绘制到canvas上
            const canvas = toRaw(this.$refs.canvas) as HTMLCanvasElement;
            
            
            const img = new Image();
            console.log("Drag file 0.2");

            img.src = this.file as string;
            
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                console.log("Drag 0.0");
                const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
                ctx.drawImage(img, 0, 0);

                console.log("Drag 0", img.width, img.height, cv2.imread(canvas));

                this.sourceImg.setMat(cv2.imread(canvas));
                console.log("Drag 1");

            };
        }
    }
};
</script>

<style scoped>
.dropzone {
    width: auto;
    height: 200px;
    margin: .5em;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.dropzone p {
    font-size: 16px;
}

.dropzone img {
    max-width: 100%;
    max-height: 100%;
}

.dropinner {
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>