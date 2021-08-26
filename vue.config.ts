module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  lineOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/main.scss";`,
      },
    },
  },
};
