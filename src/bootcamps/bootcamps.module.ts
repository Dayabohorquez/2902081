import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { Bootcamp, BootcampSchema } from './entities/bootcamp.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forFeature([{name: Bootcamp.name, schema: BootcampSchema}])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
