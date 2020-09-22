# Mongo

## Instalar mongo

[Mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## Iniciar Mongo

```
sudo systemctl start mongod
```

## Detener Mongos

```
sudo service mongod stop
```

## Recargar el demonio

Despues de reiniciar, se debe iniciar nuevamente Mongo

```
sudo systemctl daemon-reload
```

## Verificar estado de Mongo

```
sudo systemctl status mongod
```

## Iniciar Mongo Shell

```
mongo
```

Para iniciar la base de datos en otro puerto:

```
mongod --port 27018
```

## Para garantizar el inicio automático de Mongo durante el inicio del sistema

```
sudo systemctl enable mongod
```

## Problemas al iniciar mongo

### 1) Unit mongodb.service could not be found.

Puede significar que mongod.service aún no está habilitado en su máquina.

- Si Mongo esta habilitado en su maquina:

```
systemctl list-unit-files --type=service
```

- Si aparece como "disabled", entonces debes habilitarlo.

```
sudo systemctl enable mongod.service
```

- Si queremos ver si el archivo mongod.service existe en caso de que falte este archivo, verifique

```
ls /lib/systemd/system
```

Verás un archivo

```
/lib/systemd/system/mongod.service
```

### 2) La Unidad mongodb.service esté enmascarada.

Se determina ejecutando el siguiente comando

```
systemctl list-unit-files | grep mongod
```

- Si responde:

```
mongod.service                         masked
```

- Puede desenmascarar la unidad de la siguiente manera:

```
sudo systemctl unmask mongod
sudo systemctl start mongod
sudo systemctl enable mongod
```
