const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.json({message: 'Api no ar'});
});

app.listen(3000, () => console.log("Server ready on port 3000."));
