// src/services/authService.ts
import axios from "axios";

const API_URL = "http://localhost:3000/auth/login";

interface LoginResponse {
  access_token: string;
}

class AuthService {
  async login(email: string, password: string): Promise<string | null> {
    try {
      const response = await axios.post<LoginResponse>(API_URL, {
        email,
        password,
      });
      const token = response.data.access_token;
      if (token) {
        localStorage.setItem("token", token);
        return token;
      }
      return null;
    } catch (error) {
      console.error("Error during login", error);
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  logout(): void {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
