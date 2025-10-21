import axios from "axios";

const AXIOS_TIMEOUT_MS = 5000;

export const verifyGoogleUser = async (
  token: string
): Promise<{ email: string; name: string }> => {
  const userRes = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`,
    { timeout: AXIOS_TIMEOUT_MS }
  );

  return userRes.data;
};
