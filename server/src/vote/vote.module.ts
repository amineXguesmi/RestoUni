/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { Vote } from './entities/vote.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

import {RestaurantService} from "../restaurant/restaurant.service";
import {Restaurant} from "../restaurant/entities/restaurant.entity";
<<<<<<< HEAD
import {RestaurantModule} from "../restaurant/restaurant.module";
import {Option} from 'src/option/entities/option.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Vote,Restaurant,Option]),
      RestaurantModule,

=======

@Module({
  imports: [
    TypeOrmModule.forFeature([Vote,Restaurant]),
>>>>>>> be812eb7f5be419fe59ce0ed3d0bf17311f15fcb
  ],
  controllers: [VoteController],
  providers: [VoteService,RestaurantService,RestaurantService],
  exports: [VoteService,TypeOrmModule]

})
export class VoteModule {}
