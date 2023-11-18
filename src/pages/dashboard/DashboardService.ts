import { URLS } from "../../constant/url";
import { IPassword } from "../../type/password";

export const generatePassword = async (passwordFields: IPassword) => {
  try {
    let response = await fetch(URLS.GENERATE_PASSWORD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passwordFields),
    });
    response = await response.json();
    return response;
  } catch (error) {
    throw error;
  }
};
