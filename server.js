const epxress = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const app = epxress();
const connectDB = require("./config/db");

const bootcamps = require("./routes/bootcamps");

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(morgan("dev"));
app.use(epxress.json({ extended: false }));

app.use("/api/v1/bootcamp", bootcamps);

app.use(errorHandler);
const PORT = 5000;

app.listen(PORT, console.log(`Server running is On PORT ${PORT}`.grey.bold));
