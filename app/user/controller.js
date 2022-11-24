const Prisma = require("../../helper/client");

module.exports.Get = async (req, res) => {
  try {
    const users = await Prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

module.exports.Post = async (req, res) => {
  try {
    await Prisma.user.create({
      data: {
        name: req.body.name,
        address: req.body.address,
        phone_no: req.body.phone_no,
      },
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
