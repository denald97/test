import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email:string;
    password:string;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs > {
    @ApiProperty({example: '1', description: 'ID пользователя'})
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Эл.почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен?'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @BelongsToMany(()=>Role, ()=>UserRoles )
    Roles:Role[];
}