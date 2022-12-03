const UserService = require("../services/UserService");
const {
  validateCreateUser,
  validateId,
  validateQueryFilter,
} = require("../vaiidators/user");

class UserController {

  async CreateUser(req, res) {
    const { error } = validateCreateUser(req.body);
    if (error) {
      const [{ message }] = error.details;
      return res.status(400).json({
        success: false,
        error: message,
      });
    }

    await UserService.create(req.body);
    return res.sendStatus(201);
  }

  async GetUserById(req, res) {
    const { error } = validateId(req.params);
    if (error) {
      const [{ message }] = error.details;
      return res.status(400).json({
        success: false,
        error: message,
      });
    }
    const { id } = req.params;
    console.log({id})
    const getUserResponse = await UserService.getById(id);
    return res.json({
      success: true,
      data: getUserResponse,
    });
  }

  async RemoveUser(req, res) {
    const { error } = validateId(req.params);
    if (error) {
      const [{ message }] = error.details;
      return res.status(400).json({
        success: false,
        error: message,
      });
    }
    const { id } = req.params;
    await UserService.remove(id);
    return res.sendStatus(200);
  }

  async QueryUser(req, res) {
    const { error } = validateQueryFilter(req.query);
    if (error) {
      const [{ message }] = error.details;
      return res.status(400).json({
        success: false,
        error: message,
      });
    }

    const { Name, Email } = req.query;
    console.log(req.query)
    const queryResponse = await UserService.query({ Name, Email });
    return res.json({
      success: true,
      data: queryResponse,
    });
  }
}

module.exports = new UserController()