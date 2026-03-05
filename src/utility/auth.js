export const isAuthenticated = () => {
  const token = localStorage.getItem("admin_token");
  if (!token) return false;

  try {
    // JWT decode kora
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);

    // check expiration
    if (payload.exp && payload.exp < now) {
      localStorage.removeItem("admin_token");
      return false;
    }

    return true;
  } catch (error) {
    // invalid token
    console.error("Invalid token", error);
    return false;
  }
};
