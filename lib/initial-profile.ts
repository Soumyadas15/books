import { currentUser, redirectToSignIn, redirectToSignUp } from "@clerk/nextjs";
import { db } from "./db";


export const initialProfile = async () => {
  const user = await currentUser();

  if (!user){
    return null
  }

  const profile = await db.user.findUnique({
    where: {
      userId: user.id
    }
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.user.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });

  return newProfile;
};