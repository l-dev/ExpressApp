const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const myController = require("./controllers/myBathroom");
app.use("/", myController);
app.get(':id', function(req, res){
    res.send('id: ' + req.params.id)
    });

    app.set("port", process.env.PORT || 5000);

    app.listen(app.get("port"), () => {
      console.log(`✅ PORT: ${app.get("port")} `);
    });

app.listen(5000, () => {
  console.log("Rollin on port 5000");
});
