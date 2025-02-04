import axios from "axios";

export const createUserAccout = async (
  firstName: string,
  lastName: string,
  numEtu: string,
  mail: string,
  password: string
) => {
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/auth/student`,
      {
        numEtu: numEtu,
        email: mail,
        password: password,
        lastName: lastName,
        firstName: firstName,
      }
    );

    if (!response) {
      throw new Error("Could not create user account");
    }
  } catch (error) {
    throw error;
  }
};
