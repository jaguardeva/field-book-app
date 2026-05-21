import { prisma } from "@/lib/prisma";

const CreateField = async () => {
  try {
    const fields = await prisma.field.create({
      data: {
        name: "Lapangan Badminton 1",
        pricePerHour: 20000,
        categoryId: "cmpcl9k4l0000jk7kkk30c6rm",
      },
    });

    console.log("Field created: ", fields);
  } catch (error) {
    console.log(error);
  }
};

CreateField()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
