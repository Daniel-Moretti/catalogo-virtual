import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto";

// Imagem
@Entity('imagem')
export class Imagem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto, (produto) => produto.imagens)
  produto: Produto;

  @Column()
  caminho_arquivo: string;
}