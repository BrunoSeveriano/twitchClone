import { db } from "@/lib/db";

export const getRecommended = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
