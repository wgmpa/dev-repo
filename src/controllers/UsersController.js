import Users from "../models/Users";

class UsersController{
    async index (req,res){
      try {
         const users = await Users.find()
        return  res.json(users);

      } catch (error) {
        console.log(error);
        return res.status(500).json(`Internal server error ${error}`)
      }
    }

    async createUser(req,res){
        try {
            const { nome,email, idade, profissao,salario} = req.body;
            const findUser = await Users.findOne({email})
            const us = findUser ? 
            res.status(422).json("Usuário já cadastrado") : 
            await Users.create({nome, email, idade, profissao, salario})
            return res.status(200).json(us);

        } catch (error) {
        console.log(error);
        return res.status(500).json(`Internal server error ${error}`)   
        }
    }
}
export default new UsersController();