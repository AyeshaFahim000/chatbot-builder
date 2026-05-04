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





export { registerUser, loginUser};
