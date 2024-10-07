## 1. Entidades Principais:
- Cliente
- Produto
- Imagem
- Pedido
- PedidoProduto (tabela associativa entre Pedido e Produto)
- Tamanho
- Cor
- Entidades e Atributos

### 1. Cliente
    id: PK, auto-increment
    nome: String, obrigatório
    cpf_rs: String, obrigatório (CPF ou Razão Social)
    rg_ie: String, obrigatório (RG ou Inscrição Estadual)
    cidade: String, obrigatório
    estado: String, obrigatório
    cep: String, obrigatório
    telefone: String
    email: String
    contato: String (pessoa para contato)
    observacao: Text (qualquer observação adicional sobre o cliente)
    Relacionamentos:
        Um cliente pode ter muitos pedidos.

### 2. Produto
    id: PK, auto-increment
    nome: String, obrigatório
    descricao: Text
    preco: Decimal, obrigatório
    Relacionamentos:
        Um produto pode ter muitas imagens.
        Um produto pode ter vários tamanhos e cores (representados em tabelas associativas).

### 3. Imagem
    id: PK, auto-increment
    produto_id: FK para Produto, obrigatório
    caminho_arquivo: String, obrigatório (localização da imagem no sistema de arquivos do dispositivo)
    Relacionamentos:
        Muitas imagens podem estar associadas a um produto.

### 4. Tamanho
    id: PK, auto-increment
    descricao: String (ex: "P", "M", "G")
    Relacionamentos:
        Um produto pode ter vários tamanhos, e um tamanho pode estar associado a vários produtos (tabela associativa).

### 5. Cor
    id: PK, auto-increment
    descricao: String (ex: "Preto", "Branco", "Vermelho")
    Relacionamentos:
        Um produto pode ter várias cores, e uma cor pode estar associada a vários produtos (tabela associativa).

### 6. Pedido
    id: PK, auto-increment
    cliente_id: FK para Cliente, obrigatório
    data_pedido: DateTime, obrigatório
    Relacionamentos:
        Um pedido pode ter muitos produtos através da tabela associativa PedidoProduto.

### 7. PedidoProduto (Tabel associativa)
    id: PK, auto-increment
    pedido_id: FK para Pedido, obrigatório
    produto_id: FK para Produto, obrigatório
    tamanho_id: FK para Tamanho, obrigatório
    cor_id: FK para Cor, obrigatório
    quantidade: Integer, obrigatório
    preco_unitario: Decimal, obrigatório (copiado do preço cadastrado em Produto para garantir consistência)
    Relacionamentos:
        Representa os itens de um pedido, relacionando o pedido com os produtos e suas variações de tamanho e cor.