import { Module } from '@nestjs/common';
import { AppController, EmployeeController } from './app.controller';
import { AppService, EmployeeService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
// @Module 是一个装饰器，用于组织应用程序的结构。将相关的服务、控制器和其他模块组合在一起，形成功能单元。
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',            // 数据库主机
      port: 3306,                   // 数据库端口
      username: 'root',             // 数据库用户名
      password: 'root',         // 数据库密码
      database: 'db03',             // 数据库名称
      entities: [Employee],             // 需要注册的实体
      synchronize: true,            // 是否自动同步数据库（开发环境可用，生产环境禁用）
    }),
    TypeOrmModule.forFeature([Employee]), // 注入实体类
    // TypeOrmModule.forFeature() 是 TypeORM 和 NestJS 集成的一部分，它的作用是让你可以将指定的实体类（如 Employee）的 Repository 注册为该模块的一个可注入的依赖。
    // 这样，在这个模块中，你就可以直接注入 EmployeeRepository 来进行数据库操作。

    // typeorm 是一个流行的 ORM（对象关系映射）工具，用于在 JavaScript 和 TypeScript 中操作关系型数据库。
    // 它允许你将数据库表映射为 JavaScript/TypeScript 类，并通过这些类进行数据库操作，而无需编写 SQL 查询语句。
  ],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule { }
// imports：
// 用于导入其他模块，以便当前模块可以使用它们提供的功能。
// controllers：
// 指定属于这个模块的控制器。
// 控制器处理传入的 HTTP 请求并返回响应。
// providers：
// 声明当前模块中提供的服务。
// 服务可以被模块内的控制器和其他服务使用。

// AppModule 通常是 NestJS 应用的根模块（主模块），它是应用程序的入口点。
// 根模块的主要职责是组织应用的核心结构，例如导入其他模块、注册控制器和服务等。