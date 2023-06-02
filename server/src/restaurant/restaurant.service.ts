/* eslint-disable prettier/prettier */

import {Injectable, NotFoundException} from '@nestjs/common'
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';


import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Restaurant} from "./entities/restaurant.entity";
import {Menu} from "../menu/entities/menu.entity";
import {Vote} from "../vote/entities/vote.entity";
import * as bcrypt from 'bcrypt';



@Injectable()
export class RestaurantService {

    constructor(
        @InjectRepository(Restaurant)
        private readonly RestaurantRepository: Repository<Restaurant>
    ) {}
  async create(createRestaurantDto: CreateRestaurantDto) {
        const restaurant = await this.RestaurantRepository.create(createRestaurantDto);
        restaurant.salt=  await bcrypt.genSalt();
        restaurant.password =  await bcrypt.hash(restaurant.password, restaurant.salt);

    return  this.RestaurantRepository.save(restaurant);

  }

  async findAll(): Promise<Restaurant[]> {
    return await this.RestaurantRepository.find({
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    },
    );
  }

  findOne(id: string): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        id: id
      },
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    }).then(Restaurant => {
      if (!Restaurant) {
        throw new NotFoundException("Restaurant not found");
      }
      return Restaurant;
    });

  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    //chek if the restaurant exists
    const restaurant = this.RestaurantRepository.findOne({ where: { id: id } });
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }

    return this.RestaurantRepository.update(id, updateRestaurantDto);
  }

  remove(id: string) {

    const restaurant = this.RestaurantRepository.findOne({ where: { id: id } });
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return this.RestaurantRepository.delete(id);
  }
  softRemove(id: string) {
    const restaurant = this.RestaurantRepository.findOne({ where: { id: id } });
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return this.RestaurantRepository.softDelete(id);
  }
  findByName(name: string): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        name: name
      },
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    }).then(Restaurant => {
      if (!Restaurant) {
        throw new NotFoundException("Restaurant not found");
      }
      return Restaurant;
    });
  }
  findByIdentifier(identifier: string): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        identifiant: identifier
      },
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    }).then(Restaurant => {
      if (!Restaurant) {
        throw new NotFoundException("Restaurant not found");
      }
      return Restaurant;
    });
  }
}