const Users = require("../models/User");
const Panels = require("../models/Panel");
const Image = require("../models/Image");
const Goal = require("../models/Goal");
const cloudinary = require("../middleware/cloudinary");

const handleError = (err, res, customMessage) => {
  console.error(customMessage, err);
  res.status(500).json({ message: customMessage });
};

module.exports = {
  getProfileData: async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      const panels = await Panels.find({ createdBy: req.params.id });

      res.status(200).json({ user, panels });
    } catch (err) {
      handleError(err, res, "Caught Error In getProfileData.");
    }
  },

  getPanelData: async (req, res) => {
    try {
      const panel = await Panels.findById(req.params.id);
      const images = await Image.find({ panelId: req.params.id });

      res.status(200).json({ panel, images });
    } catch (err) {
      handleError(err, res, "Caught Error In getPanelData.");
    }
  },

  getGoalData: async (req, res) => {
    try {
      const goals = await Goal.find({ panelId: req.params.id });

      res.status(200).json({ goals });
    } catch (err) {
      handleError(err, res, "Get Goal Data server error");
    }
  },

  getMediaData: async (req, res) => {
    try {
      const images = await Image.find({ panelId: req.params.id });

      res.status(200).json({ images });
    } catch (err) {
      handleError(err, res, "Get IMAGE Data server error");
    }
  },

  // Panel / category requests
  addPanel: async (req, res) => {
    try {
      const { tokenId, newPanelTitle } = req.body;

      const newPanel = new Panels({
        createdBy: tokenId,
        title: newPanelTitle,
      });

      await newPanel.save();

      res.status(201).json({
        success: true,
        message: "New Panel created successfully!",
        newPanel,
      });
    } catch (err) {
      handleError(err, res, "Caught Error In addPanel.");
    }
  },

  editPanelTitle: async (req, res) => {
    try {
      const { currentTitle } = req.body;

      await Panels.findByIdAndUpdate(
        { _id: req.params.id },
        { title: currentTitle }
      );
      res.status(200).json({ message: "Updated title" });
    } catch (err) {
      handleError(err, res, "Error in editing panel title.");
    }
  },

  deletePanel: async (req, res) => {
    try {
      const images = await Image.find({ panelId: req.params.id });

      for (let image of images) {
        await cloudinary.uploader.destroy(image.cloudinaryId);
      }

      await Image.deleteMany({ panelId: req.params.id });
      await Goal.deleteMany({ panelId: req.params.id });
      await Panels.findByIdAndDelete(req.params.id);

      res.status(200).json({ message: "Deleted panel stuff" });
    } catch (err) {
      console.error("controller Error:", err);
      res.status(500).json({ message: "Eroor deleting stuff" });
    }
  },

  // Image requests
  addImage: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      const newImage = new Image({
        imageName: result.original_filename,
        imageUrl: result.secure_url,
        cloudinaryId: result.public_id,
        panelId: req.params.id,
        // createdBy: tokenId,
        createdAt: result.created_at,
      });

      await newImage.save();

      res.status(200).json({ newImage });
    } catch (err) {
      handleError(err, res, "Error. Upload an image.");
    }
  },

  deleteImage: async (req, res) => {
    try {
      let image = await Image.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: "Image not found" });
      }

      await cloudinary.uploader.destroy(image.cloudinaryId);
      await Image.findByIdAndDelete(req.params.id);

      const images = await Image.find({ panelId: req.body.panel });

      res.status(200).json(images);
    } catch (err) {
      console.log(`Delete Img Err: ${err}`);
    }
  },

  // Goal requests
  addGoal: async (req, res) => {
    try {
      const { panel, newGoal } = req.body;

      await Goal.create({
        goal: newGoal,
        completed: false,
        panelId: panel,
        createdAt: new Date(),
      });

      const allGoals = await Goal.find({ panelId: panel });

      res.status(200).json({ message: "Add Goal Success?", allGoals });
    } catch (err) {
      handleError(err, res, "Error in adding goal.");
    }
  },

  deleteGoal: async (req, res) => {
    try {
      await Goal.findByIdAndDelete(req.params.id);
      const goals = await Goal.find({ panelId: req.body.panel });

      res.status(200).json({ goals });
    } catch (err) {
      handleError(err, res, "Error in deleting goal.");
    }
  },

  markComplete: async (req, res) => {
    try {
      await Goal.findByIdAndUpdate({ _id: req.params.id }, { completed: true });

      res.status(200).json({ message: "Goal completed" });
    } catch (err) {
      handleError(err, res, "Error marking goal as completed.");
    }
  },

  markIncomplete: async (req, res) => {
    try {
      await Goal.findByIdAndUpdate(
        { _id: req.params.id },
        {
          completed: false,
        }
      );

      res.status(200).json({ message: "Goal completed" });
    } catch (err) {
      handleError(err, res, "Error marking goal as incomplete.");
    }
  },
};
