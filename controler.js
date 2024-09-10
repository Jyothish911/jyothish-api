const player = require('../model/userschema');



// primary for getting the player
const getplayers = async(req,res)=>{
    try{
        const data = await player.find({});
        res.send({
            success:true,
            message:"fetched Data successfully from dataBase",
            data
        });
        res.end();

    }catch(error){
        console.log(error);
        res.send(error);
    }

}




// for adding the player
const addplayer = async(req,res)=>{
    try{
        const {first_name,last_name, email, mobile,role, availability} = req.body;
        if(!first_name || !last_name | !email || !mobile ||!role||!availability){
            res.send("every field is required");
        }

        await player({
            first_name,
            last_name,
            email,
            mobile,
            role,
            availability
        }).save();
        res.status(200).send({
            successs:true,
            message:"player added successfully"
        })
        res.end();
    }catch(error){
        res.status(500).send({
            message:"Internal Server Error",
            error
        })
    }
}


//  for updating the player
const updateplayer = async(req,res)=>{
    try{
        const playerId = req.params.id;
        await player.updateOne({_id:playerId},{$set:req.body});
        res.status(200).send({
            success:true,
            message:"player updated successfully"
        })

    }catch(error){
        res.status(500).send({
            message:"Internal Server Error",
            error
        })
    }
}


// for deleting the player
const deleteplayer = async(req,res)=>{
    await player.findByIdAndDelete(req.params.id);
    res.status(200).send({
        success:true,
        message:"Player deleted Successfully"
    })
    res.end();
}

module.exports = {getplayers , addplayer, updateplayer , deleteplayer};