import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('agric_farm')
export class agric_farmEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    kgpacks: number;

    @Column()
    category: string;

    @Column()
    price: number;

    @CreateDateColumn()
    created_At: Date;


}