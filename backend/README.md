# Curso

## Clonar el repositorio 
---

## Crear base de datos
---
### Instalar mongodb

[Mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Crear la base de datos

1. Abrir un terminal y ejecutar para entrar al shell de mongo
```
mongo
```
2. Crear la base de datos
```
use angular_curso
```
3. Guardar un registro
```
db.artists.save({name:"Nigel Kunze", description:"Et tenetur saepe inventore qui facilis. Quae nobis occaecati. Ipsam nam libero est soluta eos et assumenda. Exercitationem iusto impedit officia cum.", image:"null"});
```
4. Para ver sus bases de datos
```
show dbs;
```
5. Eliminar base de datos
```
use angular_curso
db.dropDatabase();
```
~~~
Respuesta:
{ "dropped" : "w3big", "ok" : 1 }
~~~
