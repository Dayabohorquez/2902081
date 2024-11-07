import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const newBootcapm =  new this.courseModel(createCourseDto)
    return await newBootcapm.save()
  }

  async findAll() {
    return await this.courseModel.find(). exec();
  }

  findOne(id: string) {
    return this.courseModel.find({_id : id}).exec();
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id , {$set : updateCourseDto});
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
