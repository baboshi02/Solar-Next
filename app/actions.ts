"use server";
export const loginAction = async (loginData: FormData) => {
  const password = loginData.get("password");
  const email = loginData.get("email");
  console.log("email: ", email);
  console.log("password: ", password);
};

export const signinAction = async (signInData: FormData) => {
  const username = signInData.get("username");
  const password = signInData.get("password");
  const email = signInData.get("email");

  console.log("email: ", email);
  console.log("password: ", password);
  console.log("username: ", username);
};
