import * as userService from "../services/userService.js";

const registerUser = async (req, res) => {
  try {
    const { name, companyName, email, password } = req.body;
    const user = await userService.registerUser(
      name,
      companyName,
      email,
      password,
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { name, companyName, email } = req.body;

    const user = await userService.updateUserProfile(
      req.user.id,
      name,
      companyName,
      email,
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await userService.deleteUser(req.params.id);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

export {
  registerUser,
  loginUser,
  getUserProfile,
  getUserById,
  updateUserProfile,
  deleteUser,
};
