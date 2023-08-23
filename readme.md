# API Template - Typescript

- Template para construção de API's<br>

- Tecnologias utilizadas:<br>
  Typescript<br>
  TypeORM<br>
  Express<br>
  Uuid<br>
- Ferramentas configuradas:<br>
  Redis<br>
  JSON Web Token<br>
  Jest<br>
- Conceitos básicos de arquitetura aplicados<br>

- Adicionalmente uma planilha de excel para gerar bases de arquivos para Models, Entities, Controller, Repositories e Routes.<br>
  Os arquivos gerados pela planilha necessitam ter os imports atualizados de acordo com a estrutura aplicada ao projeto.<br>
  São gerados códigos básicos para um CRUD simples.<br>

## 🚀 Instalando

Para iniciar o uso da api, abra o terminal e execute

```
npm install
```

## ☕ Usando o Template

Para usar siga estes passos:

- Primeiro crie um arquivo .env e complete com as informações do seu projeto, seguindo o exemplo contido no .env.example <br>

![exc3](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/b3bb8ae6-74c5-409d-aefc-28d88269b5e1)


- Executar o comando para testar as conexões com os bancos de dados<br>

```
npm run dev
```

Se as conexões derem certo aparecerá a mensagem no terminal:<br>

![exc4](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/139c0b5d-0d45-4218-9497-62734a38d864)

- Dentro da pasta src/app/features tem uma pasta com o exemplo de arquitetura<br>
  A pasta pode ser copiada e renomeada de acordo com as features do projeto<br>

![exc5](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/3e41497a-c405-41b5-8bbd-6362d8673713)

## ☕ Utilizando a planilha excel para gerar os códigos base

Na aba "Entry" insira os dados, como nome e propriedades a serem criados<br>

No campo "constructor" devem ser incluídas as propriedades que serão usadas como parâmetro dentro do constructor do model<br>
---constructor(as propriedades que são informadas aqui)<br>

No campo "fora do constructor" as demais propriedades<br>

No campo "valor p/ constructor" os valores iniciais dessas propriedades que não são informadas como parâmetros<br>
---No exemplo da tabela o valor "CreateUuid()" - esse valor é para chamada da função que atribui uma string aleatória ao id<br>
---Quando incluído este valor ele já inclui a linha do import no próximo passo<br>

Na Tabela à esquerda (set, get) deve ser marcado com x as propriedades que terão incluídos getters e setters ao model<br>

Na mesma a opção toJson deve ser marcada para as propriedades que serão ao método toJson()<br>
---Este método é chamado em rotas que fazem a listagem de usuários por exemplo <br>
-neste exemplo não seria interessante incluir senha ou outra informação sensível pois esta ficaria visível a quem acesse a rota de get<br>
-este método também altera o visual do que é exibido, removendo as "\_" do nome das propriedades (\_id => id)<br>

E por último a opção "PK" refere-se a propriedade que será o identificador único na tabela do banco de dados<br>

No campo "Config Entity" podem ser marcados para incluir as propriedades de data de criação e atualização na tabela do banco de dados<br>

![exc1](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/5f5e2401-fb9d-4b50-b123-8de876261611)

Na aba "Results" serão exibidos os códigos gerados, que devem ser copiados e colados em um arquivo .ts<br>

![exc2](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/253c9e28-e075-469b-9cd9-633874b1cf6b)

## Importante!

- Não é gerado nenhum código para UseCase<br>
- Redis está configurado e pronto para uso, deve ser configurado nos useCases da aplicação
- Jest está configurado e pronto para uso, mas nenhum teste foi criado
- JSON Web Token está configurado e pronto para uso

- O código gerado para a entity não faz os relacionamentos, estes precisam ser configurados usando os métodos do TypeORM<br>
  ![exc7](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/2208863b-acd0-4ebe-b393-88b2799d5866)

- O Controller gerado precisa ser alterado para chamar os useCases corretos<br>
  ![exc6](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/e9e158cc-a3b4-454b-9572-f9561a2d6a0e)

- O código do routes não é gerado com nenhum middleware, estes precisam ser adicionados caso necessários<br>
  ![exc10](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/ad0fc571-f6fb-427d-afc3-15b8521c8484)

- No código do repository precisam ser corrigidos os imports e adicionados métodos de acordo com o projeto<br>
  ![exc9](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/8140470a-a4ac-43ea-951d-67c0f0a5dc98)

- Exemplo de model criado<br>
  ![exc8](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/e6e28e5f-942f-40ee-a1e9-1f28e929332c)
