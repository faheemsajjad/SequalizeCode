module.exports = function (app) {
    
    app.use("/emp", require("../controllers/Employee"));
    app.use("/dept", require("../controllers/Dept"));
    app.use("/sal", require("../controllers/Salgrade"));
};
