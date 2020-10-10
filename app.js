/** packages */
const express= require("express");
const config = require("config");
const bodyParse = require("body-parser");

/** app configuration */
const app= express();
const port= config.get("server-port");
const jsonParser= bodyParse.json();
const urlEncodedParser= bodyParse.urlencoded(
    {
        extended:true
    }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn= require("./middleware/getlpAddress");
app.use("*",ipFn);

/** Methods */
app.get("/",(req,res,next)=>{
    res.send("Welcom to academic rest api");
});

/** User Routes Loading */
const userRoutes = require("./routes/user.route");
userRoutes(app);

// Token middleware
tkFn = require("./middleware/verifyToken");
app.use(tkFn);

/** Student Routes Loading */
const studentRoutes = require("./routes/student.route");
studentRoutes(app);

/** Teacher Routes Loading */
const teacherRoutes = require("./routes/teacher.route");
teacherRoutes(app);

/** Period Routes Loading */
const periodRoutes = require("./routes/period.route");
periodRoutes(app);

/** Course Routes Loading */
const courseRoutes = require("./routes/course.route");
courseRoutes(app);

/** Faculty Routes Loading */
const facultyRoutes = require("./routes/faculty.route");
facultyRoutes(app);

/** Program Routes Loading */
const programRoutes = require("./routes/program.route");
programRoutes(app);

app.listen(port, () =>{
    console.log("server is runnig")
})