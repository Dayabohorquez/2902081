import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const newBootcapm =  new this.reviewModel(createReviewDto)
    return await newBootcapm.save()
  }

  async findAll() {
    return await this.reviewModel.find(). exec();
  }

  findOne(id: string) {
    return this.reviewModel.find({_id : id}).exec();
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewModel.findByIdAndUpdate(id , {$set : updateReviewDto});
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
