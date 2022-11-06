# CadastroFuncionario

## ComoFunciona?
Basicamente temos um CRUD em uma unica tela, na qual o angular é responsavel por mostrar as estapas do CRUD em um unico local.

```bash
# FRONTEND
Lembrete!
O Front devera rodar na porta http://localhost:4200/

# BACKEND
Lembrete!
O Front só consumirá se o back estiver  rodando na porta https://localhost:7199/
```

## FRONTEND install
 - npm install
 - ng build
 - ng serve -o
 <br/><b>OR</b>
 - npm install
 - npm start

## BACKEND install
 - dotnet tool install --global dotnet-ef
 - dotnet build
 - dotnet ef migrations add init 
 - dotnet ef database update  
 
## BANCO SQL Express
 - dotnet ef migrations add init 
 - dotnet ef database update 
