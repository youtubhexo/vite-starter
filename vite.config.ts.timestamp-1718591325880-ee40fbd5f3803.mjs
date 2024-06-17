// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import UnoCSS from "file:///D:/zhangwangyan/brain/pk-front-vue3/node_modules/.pnpm/unocss@0.61.0_postcss@8.4.38_vite@5.2.13/node_modules/unocss/dist/vite.mjs";
import { defineConfig } from "file:///D:/zhangwangyan/brain/pk-front-vue3/node_modules/.pnpm/vite@5.2.13_@types+node@20.14.2_sass@1.77.4/node_modules/vite/dist/node/index.js";
import VueRouter from "file:///D:/zhangwangyan/brain/pk-front-vue3/node_modules/.pnpm/unplugin-vue-router@0.9.1_vue-router@4.3.2_vue@3.4.27/node_modules/unplugin-vue-router/dist/vite.js";
import AutoImport from "file:///D:/zhangwangyan/brain/pk-front-vue3/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.11.0/node_modules/unplugin-auto-import/dist/vite.js";
import vue from "file:///D:/zhangwangyan/brain/pk-front-vue3/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.13_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/zhangwangyan/brain/pk-front-vue3/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.13_vue@3.4.27/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/zhangwangyan/brain/pk-front-vue3/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      // global imports to register
      imports: [
        // presets
        "vue",
        {
          "@vueuse/core": [
            // named imports
            "useMouse",
            // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"]
            // import { useFetch as useMyFetch } from '@vueuse/core',
          ]
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx6aGFuZ3dhbmd5YW5cXFxcYnJhaW5cXFxccGstZnJvbnQtdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcemhhbmd3YW5neWFuXFxcXGJyYWluXFxcXHBrLWZyb250LXZ1ZTNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3poYW5nd2FuZ3lhbi9icmFpbi9way1mcm9udC12dWUzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZVJvdXRlcih7XG4gICAgICAvKiBvcHRpb25zICovXG4gICAgfSksXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgVW5vQ1NTKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICAvKiBvcHRpb25zICovXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcbiAgICAgICAgL1xcLm1kJC8gLy8gLm1kXG4gICAgICBdLFxuXG4gICAgICAvLyBnbG9iYWwgaW1wb3J0cyB0byByZWdpc3RlclxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAvLyBwcmVzZXRzXG4gICAgICAgICd2dWUnLFxuICAgICAgICB7XG4gICAgICAgICAgJ0B2dWV1c2UvY29yZSc6IFtcbiAgICAgICAgICAgIC8vIG5hbWVkIGltcG9ydHNcbiAgICAgICAgICAgICd1c2VNb3VzZScsIC8vIGltcG9ydCB7IHVzZU1vdXNlIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgICAgIC8vIGFsaWFzXG4gICAgICAgICAgICBbJ3VzZUZldGNoJywgJ3VzZU15RmV0Y2gnXSAvLyBpbXBvcnQgeyB1c2VGZXRjaCBhcyB1c2VNeUZldGNoIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLGVBQWUsV0FBVztBQUN0VSxPQUFPLFlBQVk7QUFDbkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFOa0ssSUFBTSwyQ0FBMkM7QUFTdE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBO0FBQUEsSUFFVixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFHQSxTQUFTO0FBQUE7QUFBQSxRQUVQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsZ0JBQWdCO0FBQUE7QUFBQSxZQUVkO0FBQUE7QUFBQTtBQUFBLFlBRUEsQ0FBQyxZQUFZLFlBQVk7QUFBQTtBQUFBLFVBQzNCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
