import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectEntityManager, InjectRepository} from "@nestjs/typeorm";
import {EntityManager, Repository} from "typeorm";
import {User} from "./entities/user.entity";

@Injectable()
export class UserService {

  // 方式1：使用entityManger,缺点是调用方法时需要每次传入User
  @InjectEntityManager()
  private manager: EntityManager

  // 方式2：已User entity 使用repository的方式
  @InjectRepository(User)
  private userRepository: Repository<User>

  create(createUserDto: CreateUserDto) {
    this.manager.save(User, createUserDto)
  }

  findAll() {
    // 方式2：
    console.log(this.userRepository.find())
    // 方式1：
    return this.manager.find(User)
  }

  findOne(id: number) {
    return this.manager.findOne(User, {
      where: {
        id
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.manager.save(User,{
      id: id,
      ...updateUserDto
    })
  }

  remove(id: number) {
    this.manager.delete(User, id)
  }
}
