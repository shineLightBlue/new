import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// Repository 是 TypeORM 提供的一个类，用于简化与数据库交互的过程。它代表数据库中的一个实体（表）的操作，
// 通过 Repository，你可以轻松执行基本的 CRUD 操作（创建、读取、更新、删除），而无需直接编写 SQL 查询。
import { Employee } from './employee.entity'; // 导入你的实体类
// 在 NestJS 中，@Injectable() 是一个类装饰器，用于标记一个类为 可注入的服务（Service）。
// NestJS 使用依赖注入（Dependency Injection, DI）机制来管理和提供服务，@Injectable() 是这个机制的基础。
// 使用 @Injectable() 装饰器，NestJS 可以识别这个类并将其添加到依赖注入容器（IoC 容器）中。
// 其他类可以通过构造函数注入来使用它。
// 如果一个类依赖于另一个类，@Injectable() 装饰器可以让 NestJS 自动解析和注入依赖，而无需手动创建实例。
// 依赖注入的核心机制：

// @Injectable() 是 NestJS 的依赖注入系统的核心。它告诉 NestJS，哪个类可以作为依赖被注入到其他类中。
// 提高代码的可测试性和灵活性：

// 通过依赖注入，可以轻松替换服务的实现，用于测试或扩展功能。


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello WorldXXXX!';
  }
}
// 在 NestJS 中，服务通常会被注册到模块中，然后才能被其他组件（如控制器）使用。
// 服务类与控制器协作 AppService 类的方法通常由控制器调用。

// npm install --save @nestjs/typeorm typeorm mysql

@Injectable()
export class EmployeeService {
  constructor(
    // 使用 @InjectRepository，你可以将 Repository 自动注入到你的服务类，从而使你可以在服务中直接使用它进行数据库操作，而不需要手动实例化 Repository。
    @InjectRepository(Employee) // 注入 Employee 实体的 Repository
    private readonly employeeRepository: Repository<Employee>,
    // 在 NestJS 中，@InjectRepository 会根据你提供的实体类（例如 Employee），
    // 从 TypeORM 中获取到对应的 Repository 实例，并将其注入到你的服务类中。然后你就可以使用该 Repository 实例执行数据库操作（如查询、插入、更新、删除等）。
  ) {}

    // 查询所有员工
    async findAll(): Promise<Employee[]> {
      return this.employeeRepository.find(); // 查询所有记录
    }
  
    // 根据 id 查询员工
    async findById(id: number): Promise<Employee> {
      return this.employeeRepository.findOne({ where: { id } }); // 根据 id 查询
    }
  
    // 查询符合条件的员工
    async findByJob(job: number): Promise<Employee[]> {
      return this.employeeRepository.find({ where: { job } }); // 根据职位查询
    }
}