class UsersController{
    async index (req,res){
     return   res.json({hello:"Hello funcionou"});
    }

}

export default new UsersController();