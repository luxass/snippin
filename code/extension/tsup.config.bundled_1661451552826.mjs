// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig({
  entry: ["./src/extension.ts"],
  format: "cjs",
  bundle: true,
  outDir: "./dist",
  external: ["vscode"],
  platform: "node"
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3RzdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnRyeTogWycuL3NyYy9leHRlbnNpb24udHMnXSxcbiAgZm9ybWF0OiAnY2pzJyxcbiAgYnVuZGxlOiB0cnVlLFxuICBvdXREaXI6ICcuL2Rpc3QnLFxuICBleHRlcm5hbDogWyd2c2NvZGUnXSxcbiAgcGxhdGZvcm06ICdub2RlJ1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTyxDQUFDLG9CQUFvQjtBQUFBLEVBQzVCLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFVBQVUsQ0FBQyxRQUFRO0FBQUEsRUFDbkIsVUFBVTtBQUNaLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
