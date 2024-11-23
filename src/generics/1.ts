import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${(error as Error).message}`);
  }
}

type UserData = {
  id: number;
  name: string;
  email: string;
};

fetchData<UserData>("https://api.example.com/user");
