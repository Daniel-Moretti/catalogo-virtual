import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Imagem } from './Imagem';

// Produto
@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @OneToMany(() => Imagem, (imagem) => imagem.produto)
  imagens: Imagem[];
}