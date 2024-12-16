import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService, EmployeeService } from './app.service';
// @Controller() 是一个类装饰器，用于定义一个控制器类。控制器是 NestJS 中用于处理 HTTP 请求的核心组件。每个控制器都会关联到一个或多个路由，用来处理客户端发送到指定路径的请求。

@Controller()
export class AppController {
  // NestJS 会通过其 依赖注入容器 自动创建并注入 AppService 的实例。

  constructor(private readonly employeeService: EmployeeService) { }
  // @Render('index') 是一个装饰器，用于指示 NestJS 渲染一个指定的模板文件并将其返回给客户端。
  @Get()
  @Render('index')  // 渲染 index.hbs 页面
  async root() {
    const employees = await this.employeeService.findAll();
    console.log(employees)
    return { employees }; // 将 employees 数据传递给 Handlebars 模板
  }
}

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  // 查询所有员工
  @Get()
  async getAllEmployees() {
    return this.employeeService.findAll();
  }

  // 根据 id 查询员工
  @Get(':id')
  async getEmployeeById(@Param('id') id: number) {
    return this.employeeService.findById(id);
  }

  // 根据职位查询员工
  @Get('job/:job')
  async getEmployeesByJob(@Param('job') job: number) {
    return this.employeeService.findByJob(job);
  }
}
// constructor(private readonly appService: AppService) {} 的功能是：

// 声明并初始化依赖属性：appService 是 AppService 类型的实例。
// 实现依赖注入：NestJS 自动将 AppService 的实例注入到 AppController 中。
// 封装逻辑：使 AppController 可以通过 appService 属性调用服务方法，分离了控制器与服务逻辑。

// constructor 是一个类的构造函数，用于在类实例化时执行初始化操作。
// 在 NestJS 中，构造函数通常用于注入依赖（例如服务类）。