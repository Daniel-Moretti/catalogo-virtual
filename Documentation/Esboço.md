Projeto: Aplicativo de Catálogo para Moda Íntima no Atacado
Objetivo Geral
Desenvolver um aplicativo para tablets que funcione como um catálogo virtual, permitindo que vendedores externos registrem pedidos de clientes em visitas a lojas. O app será utilizado offline, com o armazenamento local de dados e imagens, e permitirá a geração de PDFs com os pedidos realizados.

Funcionalidades Principais
Catálogo de Produtos:

Exibição de fotos de alta definição de cada produto (com múltiplas fotos por produto).
Visualização de tamanhos, cores e preços dos produtos.
Campo para o cliente inserir a quantidade desejada por tamanho e cor.
Cadastro de Clientes:

Formulário para registrar os dados do cliente, como nome, endereço, telefone, etc.
Armazenamento local das informações de clientes no banco de dados SQLite.
Carrinho e Pedidos:

Os produtos escolhidos pelo cliente serão adicionados a um "carrinho".
No final da seleção, o vendedor poderá revisar e finalizar o pedido.
O pedido será associado ao cliente e salvo localmente no SQLite.
Geração de PDF:

Após o pedido ser finalizado, um arquivo PDF será gerado contendo as informações do cliente e a lista de produtos com suas respectivas quantidades.
O PDF poderá ser compartilhado diretamente com o cliente ou enviado para a empresa via e-mail ou outras plataformas.
Atualizações Sazonais:

A cada nova temporada, novos produtos serão adicionados ao catálogo, e os antigos serão removidos.
O tablet dos vendedores será recolhido periodicamente para atualizações manuais de produtos, cores, tamanhos e valores.
Armazenamento de Imagens:

As imagens dos produtos serão armazenadas localmente no tablet, devido à necessidade de alta definição.
As imagens serão carregadas a partir do armazenamento local do dispositivo e permitirão o uso de uma funcionalidade de zoom (lupa) para que os clientes possam ver detalhes dos produtos.
Tecnologias Utilizadas
Frontend:

React Native com TypeScript: Para o desenvolvimento da interface do usuário no tablet.
Expo: Para facilitar o desenvolvimento e a construção do aplicativo.
Banco de Dados Local:

SQLite: Para armazenamento offline de dados de produtos, clientes e pedidos, utilizando TypeORM como ORM para facilitar o gerenciamento do banco de dados.
Gerenciamento de Estado:

Context API ou Redux (opcional): Para manter o estado global do catálogo, carrinho e pedidos de forma eficiente.
Geração de PDF:

react-native-html-to-pdf ou react-native-pdf-lib: Para gerar os PDFs dos pedidos com os dados do cliente e produtos selecionados.
Armazenamento de Fotos:

expo-file-system: Para gerenciar o armazenamento e a exibição das imagens de produtos localmente.
Biblioteca de zoom: react-native-image-zoom-viewer para a funcionalidade de lupa nas imagens.
Fluxo do Aplicativo
Tela Inicial:

Menu principal com opções para acessar o catálogo de produtos, cadastro de clientes e histórico de pedidos.
Catálogo de Produtos:

Exibição dos produtos com suas fotos, detalhes e campos de quantidade.
Cliente preenche a quantidade desejada para cada variação de produto (tamanho e cor).
Carrinho:

Exibe os produtos selecionados e permite a revisão do pedido antes de finalizar.
Cadastro de Cliente:

Formulário para coletar informações do cliente antes da finalização do pedido.
Finalização do Pedido:

Geração de um PDF com os detalhes do cliente e do pedido.
Possibilidade de compartilhar o PDF via e-mail ou outro método.
Atualizações de Catálogo:

O aplicativo será atualizado manualmente a cada nova temporada, recolhendo o tablet dos vendedores para inserir novas fotos e dados de produtos.
Considerações Finais
Este aplicativo será totalmente offline, otimizando a experiência de uso para vendedores em campo que podem não ter acesso à internet. A estratégia de atualização manual do catálogo por temporada, com armazenamento local de imagens, garantirá que o aplicativo funcione de forma fluida e eficiente, sem comprometer o armazenamento do dispositivo. A funcionalidade de zoom nas imagens de alta definição proporcionará uma visualização detalhada dos produtos para os clientes.

