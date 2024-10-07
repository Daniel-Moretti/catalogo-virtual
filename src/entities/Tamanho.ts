import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Tamanho
@Entity('tamanho')
export class Tamanho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;
}