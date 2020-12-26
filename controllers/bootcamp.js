const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const AsyncHandler = require("../middleware/async");

// NAME       @GET ALL BOOTCAMPS
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.getBootcamps = AsyncHandler(async (req, res, next) => {
  let query;
  // console.log(req.query);
  let queryStr = JSON.stringify(req.query);
  // console.log(queryStr);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  // console.log(queryStr);

  query = Bootcamp.find(JSON.parse(queryStr));
  const bootcamps = await query;
  // const count = await Bootcamp.countDocuments();
  if (!bootcamps) {
    return next(
      new ErrorResponse(`Bootcamp not Found with this id ${req.params.id}`, 400)
    );
  }

  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.getBootcamp = AsyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not Found with this id ${req.params.id}`, 400)
    );
  }
  res.status(201).json({ success: true, data: bootcamp });
});

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.createBootcamp = AsyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not Found with this id ${req.params.id}`, 400)
    );
  }
  res.status(201).json({ success: true, data: bootcamp });
});

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.updateBootcamp = AsyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not Found with this id ${req.params.id}`, 400)
    );
  }
  res.status(201).json({ success: true, data: bootcamp });
});

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.deleteBootcamp = AsyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not Found with this id ${req.params.id}`, 400)
    );
  }
  res.status(201).json({ success: true, data: {} });
});
