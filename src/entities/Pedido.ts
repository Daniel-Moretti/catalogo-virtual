import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import { Cliente } from './Cliente';
import { PedidoProduto } from './PedidoProduto';

// Pedido
@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente)
  cliente: Cliente;

  @Column({ type: 'datetime' })
  data_pedido: Date;

  @OneToMany(() => PedidoProduto, (pedidoProduto) => pedidoProduto.pedido)
  pedidoProdutos: PedidoProduto[];
}