const { Conflict } = require("http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar")

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with ${email} is already exist`);
  }
  const avatarURL = gravatar.url({email})
  const newUser = new User({ name, email, avatarURL });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
