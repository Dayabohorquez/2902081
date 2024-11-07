import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Course {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
