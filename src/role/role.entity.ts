import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from 'src/user/user.entity';
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
  @ManyToMany(() => User, (user) => user.role)
  user: User[];
}
