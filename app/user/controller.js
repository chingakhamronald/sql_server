const Prisma = require("../../helper/client");

module.exports = {
  async GetTransactionLists(req, res) {
    const filterData = req?.query?.search;

    console.log(filterData);

    try {
      const users = await Prisma.transactionLists.findMany({
        where: {
          type: { equals: `${filterData}` },
        },
      });

      if (users.length === 0) {
        res.status(404).json({
          message: [],
        });
      } else {
        res.status(200).json({
          data: users,
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },

  // async AddUser(req, res) {
  //   try {
  //     await Prisma.user.create({
  //       data: {
  //         name: req.body.name,
  //         address: req.body.address,
  //         phone_no: req.body.phone_no,
  //       },
  //     });
  //     res.status(200).json({ message: "success" });
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // },

  // async GetUserById(req, res) {
  //   const userId = req.params.id;

  //   try {
  //     const user = await Prisma.user.findUnique({
  //       where: {
  //         id: userId,
  //       },
  //     });
  //     res.json(user);
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // },

  // async UpdateUser(req, res) {
  //   const userId = req.params.id;

  //   try {
  //     const updateUser = await Prisma.user.update({
  //       where: {
  //         id: userId,
  //       },
  //       data: {
  //         name: req.body.name,
  //         address: req.body.address,
  //         phone_no: req.body.phone_no,
  //       },
  //     });
  //     res.json(updateUser);
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // },

  // async DeleteUser(req, res) {
  //   const userId = req.params.id;

  //   try {
  //     await Prisma.user.delete({
  //       where: {
  //         id: userId,
  //       },
  //     });
  //     res.status(200).json({ message: "success" });
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // },
};
