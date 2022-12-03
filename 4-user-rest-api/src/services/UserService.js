const Users = require("../model/user")

class UserService {

  async create(payload) {
   try {
    return await new Users(payload).save() 
   } catch (error) {
    console.error(error) // handle with a logger
    return {
      success: false,
      error
    }
   }
  }

  async remove(Id) {
    return await Users.findOneAndDelete({Id})
  }

  async getById(Id) {
    return await Users.findOne({ Id })
  }
  
  async query({Name, Email}) {
    let query = {Name}
    if(Email !== undefined) {
      query = {Email}
    }

    console.log({query})

    return await Users.findOne(query)
  }
}

module.exports = new UserService()