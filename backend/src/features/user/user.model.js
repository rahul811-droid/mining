
export default class UserModel{
    constructor(username,displayName,email,type,user_image,password,confirmPassword,source){
        this.username=username;
        this.displayName=displayName;
        this.email=email;
        this.type=type;
        this.user_image=user_image;
        confirmPassword=confirmPassword;
        source=source;
    }


    static getAll(){
        return users;
    }
}

let users= [{
    id:1,
    "username":"admin",
    "displayName":"Rahul kumar parida",
    "email":"admin@gmail.com",
    "password":"password",
    "type":"seller",
},
{
    id:2,
    "name":"admin",
    "email":"customer@gmail.com",
    "password":"password",
    "type":"customer",
}
]