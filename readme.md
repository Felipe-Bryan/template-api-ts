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

![exc3](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/207c650e-ae2e-4505-9e28-bb45b2e89407)<br>

- Executar o comando para testar as conexões com os bancos de dados<br>

```
npm run dev
```

Se as conexões derem certo aparecerá a mensagem no terminal:<br>

![exc4](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/a6060e32-97e3-4d1f-9859-e11555d47b1d)

- Dentro da pasta src/app/features tem uma pasta com o exemplo de arquitetura<br>
  A pasta pode ser copiada e renomeada de acordo com as features do projeto<br>

  ![exc5](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/c2c9015e-19c6-42ad-a6b1-ad74a9d198ac)

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

![exc1](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/ec6357f6-b1a1-449f-a7d9-8ce36699700e)<br>

Na aba "Results" serão exibidos os códigos gerados, que devem ser copiados e colados em um arquivo .ts<br>

![exc2](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/93ca3951-2835-49f2-9c68-feaf9679e56b)

## Importante!

- Não é gerado nenhum código para UseCase<br>
- Redis está configurado e pronto para uso, deve ser configurado nos useCases da aplicação
- Jest está configurado e pronto para uso, mas nenhum teste foi criado

- O código gerado para a entity não faz os relacionamentos, estes precisam ser configurados usando os métodos do TypeORM<br>
  ![exc7](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/12258356-286b-4966-9f4d-5d58c313572d)

- O Controller gerado precisa ser alterado para chamar os useCases corretos<br>
  ![exc6](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/6368f919-9520-4e06-b158-68e36448000c)

- O código do routes não é gerado com nenhum middleware, estes precisam ser adicionados caso necessários<br>
  ![exc10](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/5cdf6739-40ce-4307-b23e-38f54802a6ab)

- No código do repository precisam ser corrigidos os imports e adicionados métodos de acordo com o projeto<br>
  ![exc9](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/9dd4afd0-1578-4d21-af42-548f7e5f98a8)

- Exemplo de model criado<br>
  ![exc8](https://github.com/Felipe-Bryan/template-api-ts/assets/107513634/6f1d5f64-bb3d-4b30-8383-ef4c019f3877)
