# aqua-container

### URL = https://aqua-container.mybluemix.net
### **PATH = /users**
#### **[POST]**  CREATES AN USER
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
#### **[GET]**  RETURNS ALL USERS
```
NOT REQUIRED
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>404</kbd>
##
### **PATH = /users/id**
#### **[DELETE]**  DELETES A USER
```
id = username
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>400</kbd>
##
### **PATH = /users/login**
#### **[POST]**  AUTHENTICATES A USER
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
### **PATH = /data/id**
#### **[POST]**  GETS EACH CATEGORY DATA
```
body:
{
	"username": "name",
	"password": "pass"
}

route: id= [OVERVIEW, FACILITIES, SITUATION OF HOUSING, POPULATION, ECONOMIC ACTIVITY, 
ENVIRONMENTAL CARE, ABOUT JALISCO, ABOUT MEXICO]
```
Issue    | Status
-------- | ---
Successful| <kbd>200</kbd>
Failed    | <kbd>404</kbd>
Forbidden | <kbd>403</kbd>
##
##
##
## Leader:
### Tania Marcela Gutiérrez Godínez
#### 210689341
#
## The team:
### Edna Alejandra Rosas Avila
#### 211035841
### Ana Lydia Muñoz Alvarez
#### 211690238
### Angel Isaac Rios Pineda
#### 211674585
#
## Team name:
### Buitres

