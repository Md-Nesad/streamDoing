export const isAuthenticated = () => {
  const token = localStorage.getItem("admin_token");
  return !!token;
};
