import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
// NestFactory 是 NestJS 提供的一个静态类，用于创建 Nest 应用程序的实例。
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  // 设置模板目录
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));  // 设置 views 目录
  await app.listen(process.env.PORT ?? 3000);
}
// bootstrap 是一个由开发者定义的异步函数，用来配置并启动应用程序。
bootstrap();
// create(AppModule)
// bootstrap 是一个通用的编程术语，意思是“引导”或“初始化”。在 NestJS 中，它表示引导整个应用的启动过程。
// AppModule 是应用程序的主模块（通常由 @Module 装饰器定义）。
// create 方法会根据传入的主模块配置，初始化整个应用程序，包括：
// 加载模块、服务、控制器等依赖。
// 配置中间件、管道等全局功能。

// Handlebars 是一个轻量级且功能强大的 JavaScript 模板引擎，适用于生成动态 HTML 页面。
// 它广泛应用于服务器端渲染以及前端渲染，可以通过简单的模板语法生成动态内容，支持条件判断、循环、局部模板等功能。
// 在 NestJS 中，可以与 Handlebars 配合使用，帮助实现动态页面的渲染。

// NestJS 是一个框架，默认情况下，它使用 Express.js 或 Fastify 作为底层的 HTTP 服务器。
// NestExpressApplication 类型是特定于 Express.js 的 NestJS 应用实例类型。
// 通过使用这个类型，你可以访问与 Express 相关的功能和配置，例如中间件、静态文件、视图引擎等。

// 在 NestJS 中，await NestFactory.create(AppModule) 用于创建应用实例。
// 当你调用 NestFactory.create() 时，如果不传递任何参数，它会默认使用 Express.js 作为底层 HTTP 服务器。Express 是 NestJS 默认的 HTTP 服务器平台。

// NestExpressApplication 是一个扩展了 NestJS 应用实例的类型，允许你使用所有 NestJS 的功能，并且可以在此基础上配置 Express.js 特定的行为。
// 如果你想在 NestJS 中使用 Express 特有的功能（比如设置静态文件路径、启用视图引擎等），你需要使用 NestExpressApplication 类型来创建应用实例。

// 假设你要在 NestJS 中使用 Express 配置视图引擎（例如 Handlebars），你会使用 NestExpressApplication 类型来创建应用实例，并设置视图引擎和模板目录。

// 如果不传递 NestExpressApplication 类型，NestJS 会使用默认的 INestApplication 类型，该类型不包含 Express 特有的扩展方法。
// 因此，NestJS 无法识别 app.setViewEngine() 方法并报错。