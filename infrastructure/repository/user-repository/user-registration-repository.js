const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const userModel =
  require("../../database/model/user-model/user-registration-model").USER_REGISTRATION_MODEL;

const userRegistrationRepository = async () => {
  try {
    const returnQueryUser = await userModel.findAll();
    return returnQueryUser;
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "userRegistrationRepository"
    );
    return finalError;
  }
};

const updateUser = async (req,res) => {
  try {
    const { name, birthday } = req.body;
    const id = req.params.id;
    const returnQueryUser = await userModel.update(
      {
        id,
        name,
        birthday,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return returnQueryUser;
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "userRegistrationRepository"
    );
    return finalError;
  }
};

const createUser = async (req, res) => {
  try {
    const { name, birthday } = req.body;
    const returnQueryUser = await userModel.create(
      {
        name,
        birthday,
      }
    );
    return returnQueryUser;
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "userRegistrationRepository"
    );
    return finalError;
  }
};

module.exports = { userRegistrationRepository, updateUser, createUser };
