import axios from "axios";

export interface CustomInstructionsUpdateRequest {
  about_user_message: string;
  about_model_message: string;
  enabled: boolean;
}

export async function getAccessToken() {
  const response = await axios.get("https://chat.openai.com/api/auth/session", {
    withCredentials: true,
  });
  return response.data.accessToken;
}

export async function updateCustomInstructions(
  accessToken: string,
  data: CustomInstructionsUpdateRequest
) {
  const response = await axios.post(
    "https://chat.openai.com/backend-api/user_system_messages",
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
}
