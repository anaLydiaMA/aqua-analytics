# aqua-container
===================

###URL = https://aqua-container.mybluemix.net
###**PATH = /users**
#### CREATE AN USER
##### <i class="icon-pencil"></i> POST

```
body:
{
	"username": "name",
	"password": "pass"
}
```
Issue    | Status
-------- | ---
Successful| <kbd>201</kbd>
Failed    | <kbd>400</kbd>
##
#### GET ALL USERS
##### <i class="icon-file"></i> GET
```
NOT REQUIRED
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>404</kbd>
##
###**PATH = /users/id**
#### DELETES A USER
##### <i class="icon-trash"></i> DELETE
```
id = username
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>400</kbd>
##
###**PATH = /users/login**
#### AUTHENTICATES A USER
##### <i class="icon-refresh"></i> POST
```
body:
{
	"username": "name",
	"password": "pass"
}
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>403</kbd>
##
###**PATH = /data**
#### GETS ALL GRAPHS DATA
##### <i class="icon-file"></i> GET
```
NOT REQUIRED
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>404</kbd>
## 
## Lider del Proyecto:
### Tania Marcela Gutiérrez Godínez
#### 210689341
#
## Integrantes:
### Edna Alejandra Rosas Avila
#### 211035841
### Ana Lydia Muñoz Alvarez
#### 211690238
### Angel Isaac Rios Pineda
#### 211674585
#
## Nombre del grupo:
### Buitres

