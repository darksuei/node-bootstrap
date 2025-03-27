import { Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("custom")
export class CustomEntity extends BaseEntity {}
