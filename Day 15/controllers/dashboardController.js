// controllers/dashboardController.js
exports.getDashboard = (req, res) => {
  res.json({
    message: "Dashboard data",
    user: req.user,
  });
};