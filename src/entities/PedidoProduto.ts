import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Pedido } from './Pedido';
import { Produto } from './Produto';
import { Tamanho } from './Tamanho';
import { Cor } from './Cor';

// PedidoProduto (tabela associativa)
@Entity('pedido_produto')
export class PedidoProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.pedidoProdutos)
  pedido: Pedido;

  @ManyToOne(() => Produto)
  produto: Produto;

  @ManyToOne(() => Tamanho)
  tamanho: Tamanho;

  @ManyToOne(() => Cor)
  cor: Cor;

  @Column()
  quantidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco_unitario: number;
}