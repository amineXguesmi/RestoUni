import {Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Entity, PrimaryColumn} from "typeorm";
import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import {Restaurant} from "../../restaurant/entities/restaurant.entity";
import {v4 as uuid} from "uuid";
@Entity('menu')
export class Menu extends TimeStampEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    entrée: string;
    @Column()
    plat: string;
    @Column()
    dessert: string;
    @CreateDateColumn()
    createdAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Restaurant, Restaurant => Restaurant.id)
    restaurant: Restaurant;


}
