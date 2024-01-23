import UserModel from "./user.model";

export default  class UserController{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async addUser(req,res){
        try{
            const {userName,di,splayName,email,type,user_image,password,confirmPassword,source} = req.body;
            
        }
    }
}