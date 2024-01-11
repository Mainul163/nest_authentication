import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  role: string;
  @Column()
  label: string;
  @Column()
  createdTime: string;
  @Column()
  updatedTime: string;
}
