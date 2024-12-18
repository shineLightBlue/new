/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,hbs}", // 指定 Handlebars 模板路径
    "./src/**/*.{js,ts}", // 如果有动态渲染逻辑
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


// /**/* 是一种通配符模式，通常在文件系统和编程中用来表示特定的路径匹配规则。它有两个主要的组成部分：

// /：表示路径中的目录分隔符，通常在类 UNIX 系统（例如 Linux 和 macOS）和 URL 中使用。它表示一个目录或子目录的边界。

// *：表示通配符，匹配任意字符。* 匹配零个或多个字符。

// /**/*：这是一个组合模式，其中：

// ** 表示匹配任意层级的子目录，包括零个或多个目录。
// * 匹配任意字符（文件名）。