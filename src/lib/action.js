"use server"
import { signIn } from "./../auth";

export const dosociallogin = async (formdata) => {
  const action = formdata.get("action");
  console.log(action)
  await signIn(action, { redirectTo: "/" })
}

export async function doCredentialLogin(formData) {

  try {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password)

    const results =  await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password
    })
    return results

  } catch (error) {
    console.error(error)
  }

}