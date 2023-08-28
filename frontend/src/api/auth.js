import axios from "./axios";

export const registerRequest = async (user) => {
  try {
  await axios.post(`/register`, user);
  console.log(`Successfully registered`)

}
catch (err) {
  console.log(err.message)

  
}}
