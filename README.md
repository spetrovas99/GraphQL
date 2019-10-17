# GraphQL

## Install
 `npm install`

 ## Run
 `npm start`

 ### Examples

 **List all characters**
 
 ```query{

     name
  
    }´´´

 **List all characters alive**
 
 `npm start -- list --status="alive" --pag=2`
 
 **List all characters by name**
 
 `npm start -- list --search="legs" --pag=3`
 
 **Show all the information of the characters with that name**
 
 `npm start -- view --name="legs"`
