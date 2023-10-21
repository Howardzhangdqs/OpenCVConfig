import { defineStore } from "pinia";

export const useOpenCVStatus = defineStore("opencvstatus", {
    state: () => {
        return {
            loaded: false
        };
    },
    actions: {
    }
});