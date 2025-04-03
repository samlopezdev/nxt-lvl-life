const bcrypt = require("bcrypt");
const User = require("../models/User");
const Panels = require("../models/Panel");

module.exports = {
  createUser: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Checks if all values exist
      if (!username || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "All fields are required.",
        });
      }

      // Checks if an existing account has the same email.
      const userAlreadyExists = await User.findOne({ email });
      if (userAlreadyExists) {
        return res.status(400).json({
          success: false,
          message: "User already exists, please use a different email.",
        });
      }

      // Hash password & create NEW USER
      const hashedPassword = await bcrypt.hash(password.toString(), 10);
      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      // NEW USER saved to database
      await user.save();

      // const defaultPanels = [
      //   { title: "Career Goals", createdBy: user._id },
      //   { title: "Personal Growth", createdBy: user._id },
      //   { title: "Bucket List", createdBy: user._id },
      // ];

      // const panels = await Panels.insertMany(defaultPanels)

      // console.log(panels)
      const { id, username: createdUserName, email: createdUserEmail } = user;

      res.status(201).json({ 
        success: true,
        message: "User created successfully!",
        user: {
          id,
          username: createdUserName,
          email: createdUserEmail,
        }
      });
    } catch (err) {
      console.error(`Mayday!! Caught error in /createUser! ${err}`);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Checks for established email
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "E-mail is not recognized" });
      }

      // Checks if password is the same
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Password" });
      }

      // Updates Users lastLogin
      user.lastLogin = new Date();
      await user.save();

      const { id } = user;
      res.status(200).json({ id });
    } catch (err) {
      console.error(`Mayday!! Caught error: ${err}`);
      return res.status(500)
            .json({ success: false, message: "Error in /login" });
    }
  }
};
