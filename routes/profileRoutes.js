const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");
const upload = require("../middleware/multer");


router.get("/:id", profileController.getProfileData);
router.get("/panelData/:id", profileController.getPanelData);
router.get("/goalData/:id", profileController.getGoalData)
router.get("/mediaData/:id", profileController.getMediaData);

// Panel Route
router.post("/addPanel", profileController.addPanel);
router.put("/updateTitle/:id", profileController.editPanelTitle);
router.delete("/deleteAll/:id", profileController.deletePanel)

// Media Routes
router.post("/addImage/:id", upload.single("image"), profileController.addImage);
router.delete("/deleteImage/:id", profileController.deleteImage);

// Goal Routes
router.post("/addGoal", profileController.addGoal);
router.delete("/deleteGoal/:id", profileController.deleteGoal)
router.put("/markGoalComplete/:id", profileController.markComplete);
router.put("/markGoalIncomplete/:id", profileController.markIncomplete);


module.exports = router;