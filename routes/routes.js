module.exports = function (app) {
    //admin controller
    app.use("/admin", require("../controllers/Admin"));
};
