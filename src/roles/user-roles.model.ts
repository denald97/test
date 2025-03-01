import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({tableName:'user_roles', createdAt:false, updatedAt:false})
export class UserRoles extends Model<UserRoles> {
    
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ForeignKey(()=> Role)
    @Column({type: DataType.INTEGER})
    RolerId: number;

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    UserId: number;

}