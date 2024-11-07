import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newBootcapm =  new this.userModel(createUserDto)
    return await newBootcapm.save()
  }

  async findAll() {
    return await this.userModel.find(). exec();
  }

  findOne(id: string) {
    return this.userModel.find({_id : id}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id , {$set : updateUserDto});
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
