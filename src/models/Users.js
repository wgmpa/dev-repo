import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true,
        },
        idade:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        profissao:{
            type:String,
            required: true,
        },
        salario:{
            type: String,
            required:true
        }
    },
    {
        timestamps:true
    }
    )

    export default mongoose.model("User", userSchema)