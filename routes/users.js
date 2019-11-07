module.exports = function (app) {

    //admin controller
    app.use("/", require("../controllers/Admin"));
};
