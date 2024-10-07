-- Cliente
CREATE TABLE Cliente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fantasia_apelido TEXT,
    razaosocial_nome TEXT NOT NULL,
    cpf_rs TEXT NOT NULL,
    rg_ie TEXT NOT NULL,
    cidade TEXT NOT NULL,
    estado TEXT NOT NULL,
    cep TEXT NOT NULL,
    telefone TEXT,
    email TEXT,
    contato TEXT,
    observacao TEXT,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- Produto
CREATE TABLE Produto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Imagem
CREATE TABLE Imagem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produto_id INTEGER NOT NULL,
    caminho_arquivo TEXT NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES Produto(id)
);

-- Tamanho
CREATE TABLE Tamanho (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Cor
CREATE TABLE Cor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Pedido
CREATE TABLE Pedido (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER NOT NULL,
    data_pedido DATETIME NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- PedidoProduto (tabela associativa)
CREATE TABLE PedidoProduto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pedido_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    tamanho_id INTEGER NOT NULL,
    cor_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(id),
    FOREIGN KEY (produto_id) REFERENCES Produto(id),
    FOREIGN KEY (tamanho_id) REFERENCES Tamanho(id),
    FOREIGN KEY (cor_id) REFERENCES Cor(id)
);
