import { prisma } from "@/lib/prisma";

interface Category {
  name: string;
}

const categoriesData: Category[] = [
  {
    name: "Badminton",
  },
  {
    name: "Futsal",
  },
  {
    name: "Tennis",
  },
  {
    name: "Padel",
  },
];
const CreateCategory = async () => {
  try {
    const category = await prisma.category.createMany({
      data: categoriesData,
    });

    console.log("Category created: ", category);
  } catch (error) {
    console.log(error);
  }
};

CreateCategory()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
