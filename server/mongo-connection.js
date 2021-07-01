const mongoose = require("mongoose");

// ENG: Async database connection & TR: Asenkron database bağlantısı
async function main() {
  await mongoose
    .connect(
      process.env.MONGODB_CONNECTION_STRING || process.env.MONGO_URI, 
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(`Connected database on ${process.env.MONGO_URI}`);
    })
    .catch((err) => {
      console.log(`Error connection database: ${err}`);
    });
}

main();
