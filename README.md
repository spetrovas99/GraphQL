# GraphQL

## Install
 `npm install`

 ## Run
 `npm start`

 ### Examples

 **List one character by id**
 
 ```
 query{
  character(id: 3){
    id 
    name
    planet
    status
   }
 }
   ```

 **List all caracters by name  **
 ```
 query{
  character(name:"pepe"){
    id 
    name
    palnet
    status
  }
 }
   ```
   **List all characters by name, status and plantet**
```
 query{
  character(name:"pepe",status:"Alive",planet:"nose"){
    id 
    name
    palnet
    status
  }
 }
   ```
 
 **Configure the page number and the pache size in characters **
 
 ```
 query{
  character(page:2,pageSize:13,name:"pepe",status:"Alive",planet:"nose"){
    id 
    name
    palnet
    status
  }
 }
   ```
 
