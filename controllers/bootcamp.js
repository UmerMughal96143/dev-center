const Bootcamp = require("../models/Bootcamp");

// NAME       @GET ALL BOOTCAMPS
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    if (!bootcamps) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

// NAME       @CREATE NEW BOOTCAMP
// ROUTE       @/api/v1/bootcamp
// SCOPE       @PUBLIC

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ success: true, data: {} });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};
