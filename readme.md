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

Para iniciar o uso da api, abra o terminal e execute:

```
npm install
```

## ☕ Usando o Template

- Primeiro crie um arquivo .env e complete com as informações do seu projeto, seguindo o exemplo contido no .env.example:<br>

![exc3](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/b3bb8ae6-74c5-409d-aefc-28d88269b5e1)

- Na pasta src/main/config, no arquivo database.config.ts altere a propriedade "schema" para o schema correto da aplicação:<br>

![exc11](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/16aa2c23-92b0-4456-9613-cb0c9728a106)

- Executar o comando para testar as conexões com os bancos de dados:<br>

```
npm run dev
```

Se as conexões derem certo aparecerá a mensagem no terminal:<br>

![exc4](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/139c0b5d-0d45-4218-9497-62734a38d864)

- Dentro da pasta src/app/features tem uma pasta com o exemplo de arquitetura<br>
  A pasta pode ser copiada e renomeada de acordo com as features do projeto.<br>

![exc5](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/3e41497a-c405-41b5-8bbd-6362d8673713)

## ☕ Utilizando a planilha excel para gerar os códigos base

Na aba "Entry" insira os dados, como nome e propriedades a serem criados.<br>

No campo "constructor" devem ser incluídas as propriedades que serão informadas como parâmetro dentro do constructor do model<br>

![exc15](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/0f095dde-d8f7-491b-a3aa-2d8d18ae044c)

<hr>
1 - No campo "fora do constructor" as propriedades que serão inicializadas pela API<br>
2 - No campo "valor inicial" os valores iniciais dessas propriedades<br>

![exc16](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/a0bbf0b9-5f88-441e-b0a8-2f36a6471cd4)

---No exemplo da acima o valor "createUuid()" - esse valor chama a função do "uuid" que atribui uma string aleatória ao id<br>
---Nesta planilha, caso escolhido o valor "createUuid()", já é adicionada a linha do import ao código automaticamente<br>

<hr>
Na Tabela à esquerda (set, get) deve ser marcado com x as propriedades que terão incluídos getters e setters ao model<br>

![exc17](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/c52677f3-19b3-49fd-ac0a-d005caa750b6)

Na mesma tabela a opção toJson deve ser marcada para as propriedades que serão ao método toJson()<br>
---Este método é chamado em rotas que fazem a listagem de usuários por exemplo <br>
-neste exemplo não seria interessante incluir senha ou outra informação sensível pois esta ficaria visível a quem acessar rota de "get"<br>
-este método também altera o visual do que é exibido, removendo as "\_" do nome das propriedades (\_id => id)<br>

![exc18](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/0e92909c-f283-4328-a8b6-ee359d5c93bf)

E por último a opção "PK" refere-se a propriedade que será o identificador único na tabela do banco de dados<br>

##
No campo "Config Entity" podem ser marcadas as opções de incluir as propriedades de data de criação e atualização na tabela do banco de dados<br>

Caso haja necessidade de alterar o nome da tabela, altere no código gerado, não faça alterações nos campos automáticos da planilha pois farão com que o código gerador seja apagado.<br>
Faça alterações somente nos campos com fundo preto da aba "Entry".<br>
É obrigatório informar um id na primeira linha do campo "Fora do constructor", essa propriedade que será usada nos usecases de delete e update.<br>

![exc1](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/10fa992d-ee26-4eff-b0b7-e529ce508653)

##
Na aba "Results" serão exibidos os códigos gerados, que devem ser copiados e colados em um arquivo ".ts"<br>
Selecionar o campo com fundo preto do arquivo a ser copiado, pressionar CTRL+C e colar dentro de um arquivo ".ts"<br>
À direita é gerado uma sugestão para o nome do arquivo

![exc2](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/5cf645b5-916e-49fe-95a9-639f92c72c40)

- É recomendado gerar migrations sempre que uma entity é adicionada ao projeto ou alterada.<br>
<br>

Para gerar a migration execute o comando no terminal:

```
npm run typeorm:generate src/app/shared/database/migrations/[Nome da migration]
```

Caso o projeto não siga a mesma estrutura de pastas do template, mude para o caminho para a pasta onde serão armazenadas as migrations:<br>

```
npm run typeorm:generate [path]/[Nome da migration]
```

Após gerar a migration, execute-a para manter o banco de dados atualizado de acordo com as regras do projeto:

```
npm run typeorm:run
```

## Importante!

- Ambiente de testes está configurado para testes unitários e integrados( Jest/supertest ), nenhum teste é gerado automaticamente.

- Redis está configurado e pronto para uso, deve ser configurado nos useCases da aplicação.

- JSON Web Token está configurado e pronto para uso.

##
- O código gerado para a entity não faz os relacionamentos, estes precisam ser configurados usando os métodos do TypeORM<br>
![exc7](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/2208863b-acd0-4ebe-b393-88b2799d5866)

  ##
- O Controller gerado precisará ser alterado caso não sejam usados os nomes sugeridos pela planilha, ou o projeto siga outra estrutura de pastas<br>
![exc6](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/9af48a1b-ff01-4ecc-bd0f-b9f0bf4a2417)

  ##
- O código do routes não é gerado com nenhum middleware, estes precisam ser adicionados caso necessários<br>
![exc10](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/ba82f306-bdc6-4f49-96b7-f27928b009c5)
  
##
- No código do repository precisam ser corrigidos os imports e adicionados métodos de acordo com o projeto<br>
![exc9](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/ab29467e-b293-4554-8851-6c4086bbb4da)

##
- Os códigos criados para useCase são apenas uma base e devem ser complementados de acordo com as regras do projeto<br>
Exemplo de usecase gerado com a planilha<br>

![exc14](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/5f916e3a-9094-4a2a-a71f-da5f5598baff)

##
- Exemplo de model criado<br>
![exc8](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/e6e28e5f-942f-40ee-a1e9-1f28e929332c)
  
## Finalizações

- Adicionar no arquivo express.config.ts as rotas criadas:<br>
![exc12](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/525702f1-654f-479f-ae5c-fc8dcc314a98)

- Alterar o nome do projeto nos arquivos package.json e package-lock.json:<br>
![exc13](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/e187b696-585c-49d0-9fdc-620f98dd0706)
