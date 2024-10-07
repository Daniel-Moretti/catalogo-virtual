import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Cor
@Entity('cor')
export class Cor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;
}