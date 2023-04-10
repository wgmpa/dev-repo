const users = [
    {id:1,nome: "Wesley", idade:28, profissao: "DevJr", salario: 3.337},
    {id:2,nome: "Ana", idade:38, profissao: "DevJr", salario: 3.000},
    {id:3,nome: "Daniel", idade:28, profissao: "DevJr", salario: 3.212},
    {id:4,nome: "Carla", idade:18, profissao: "Estgiário", salario: 800},
]

class UsersController{
    async index (req,res){
    
            return  res.json(users);
     
    }

    async createUser(req,res){
        
   
    }

}

export default new UsersController();