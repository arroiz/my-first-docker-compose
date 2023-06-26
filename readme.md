# Docker compose

Esse projeto é um exemplo de docker-compose. Ao rodar `docker-compose up`, irá subir 3 containers:

`nginx`: container com nginx na porta `:8080`. Irá escutar a porta 80 e redirecionar para o `app`
`db`: container com o banco de dados mysql
`app`: aplicação node com apenas a rota `/`. Toda vez que essa rota for chamada, irá adicionar um registro aleatorio no banco de dados e vai retornar o seguinte html:

```
<h1>Full Cycle Rocks!!</h1>
<ol>
  <li value="1">pessoa numero 123</li>
</ol>
```

### Como executar

Para executar, basta clonar esse repositório e rodar o comando abaixo:

```
docker-compose up
```
