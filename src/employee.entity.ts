import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tb_emp')  // 映射到 'tb_emp' 表
// typeorm 使用 @Entity() 装饰器将类映射到数据库表。
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  gender: number;

  @Column()
  job: number;
}