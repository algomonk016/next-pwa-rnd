import { ApiResponse, getDataSimple } from "@/services/api";

export const fetchUsersSimple = async (): Promise<ApiResponse> => {
  try {
    const res = await getDataSimple('users');
    return res;
  } catch(error) {
    return {
      mode: 'online',
      data: 'Failed'
    }
  }

}