import app from "./app";
const Port = 4000;
const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb+srv://john:123@todays-date.r1b2kle.mongodb.net/Products?retryWrites=true&w=majority&appName=todays-date");
    console.log("connected successfully to MongoDB");
  } catch (error) {
    console.log("Falied to connect to MongoDB");
  }
}
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

main();