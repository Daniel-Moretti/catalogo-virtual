import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

// Cliente
@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fantasia_apelido: string;

  @Column()
  razaosocial_nome: string;

  @Column()
  cpf_rs: string;

  @Column()
  rg_ie: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  contato: string;

  @Column({ nullable: true })
  observacao: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;
}