/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards
} from '@nestjs/common';
import { VoteStudentService } from './vote-student.service';
import { AuthGuard } from 'src/student/Guards/auth.guard';
import { RestauAuthGuard } from 'src/restaurant/Guards/restau.auth.guard';


@Controller('vote-student')
@UseInterceptors(ClassSerializerInterceptor)
export class VoteStudentController {
  constructor(private readonly voteStudentService: VoteStudentService) {}

<<<<<<< HEAD
  @Post(':studentId/:voteId')
  create( @Param('studentId') studentId: string, @Param('voteId') voteId: string,
         @Body("optionId")optionId:string) {
    return this.voteStudentService.create(voteId,  studentId, optionId);
=======
  @Post(':restaurantId/:studentId/:voteId')
  @UseGuards(AuthGuard)

  create(@Param('restaurantId') restaurantId: string, @Param('studentId') studentId: string, @Param('voteId') voteId: string,

         @Body("optionId") optionId: string) {
    return this.voteStudentService.create(voteId,  studentId, optionId, restaurantId);
>>>>>>> be812eb7f5be419fe59ce0ed3d0bf17311f15fcb
  }

  @Get('studentId/:voteId')
  @UseGuards(RestauAuthGuard)

  findOne( @Param('studentId') studentId: string, @Param('voteId') voteId: string) {

    return this.voteStudentService.findOne( voteId, studentId);
  }
}
