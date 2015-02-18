module.exports = {
  scripts: {
    src: ["./public/js/*.js", "!./public/js/*.min.js"],
    dest: "./public/js",
    rename: {
      dirname: ".",
      suffix: ".min"
    }
  },
  styles: {
    src: "./public/styles/*.less",
    dest: "./public/styles",
    autoprefixer: ["last 2 versions"],
    rename: {
      dirname: ".",
      suffix: ".min",
      extname: ".css"
    }
  },
  vendor: {
    dest: "./public/vendor",
    rename: {
      dirname: ".",
      suffix: ".min"
    }
  }
}