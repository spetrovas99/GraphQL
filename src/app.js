import {GraphQLServer} from "graphql-yoga";
import {fetchData} from "./fetchdata";

const url = "https://rickandmortyapi.com/api/character/";
let n;
const runApp = data =>{
    
    const typeDefs = `
        type Query{
            character(id: Int!): Character!
            characters(page: Int, pageSize: Int, name: String, status: String, planet: String): [Character!]!
            planets: [String!]!
        }

        type Character{
            id: Int!
            name: String!
            status: String!
            planet: String!
        }`


    const resolvers={
        Query:{
            planets: () =>{
                let array = [];
                data.forEach(element => {
                    array.push(element.location.name);
                });
                return([...new Set(array)]);
            },
            character: (parent,args,ctx,info) => {
                const result = data.find(obj => obj.id === args.id);
                return{
                    id: result.id,
                    name: result.name,
                    status: result.status,
                    planet: result.location.name
                }
                
            },
            characters:(parent,args,ctx,info)=>{
                let result = [];
                let concat = data.slice();
                let page = args.page || 1;
                let pageSize = args.pageSize || 20;
                if(args.name){
                    concat = concat.filter(obj => obj.name.includes(args.name)); 
                }
                if(args.planet ){
                    concat = concat.filter(obj => obj.location.name.includes(args.planet));
                }
                if(args.status){
                    concat = concat.filter(obj => obj.status.includes(args.status));
                }
                
                for(let i=(page-1)*pageSize; i<pageSize*page; i++){
                    //if(i < concat.length)
                        result.push({
                            id: concat[i].id,
                            name: concat[i].name,
                            status: concat[i].status,
                            planet: concat[i].location.name
                            
                    });
                }
                return result;
            }
        }
    }
    const server = new GraphQLServer({typeDefs,resolvers});
    server.start(); 
}
    
fetchData(runApp,url);