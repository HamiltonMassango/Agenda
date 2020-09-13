import express from "express";

const app = express();

app.get("/", (req, res) =>
  res.json({
    msg: "Olá mundo ",
  })
);
app.listen(3333, () => {
  console.log("server started on port 3333");
});
