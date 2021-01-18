import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
    plugins: [vue(), vueJsx()],
    build: {
        lib: {
            entry: "src/lib.ts",
            name: "hehe",
        },
    },
});
