export default function useJsonPut(BaseUrl) {
  const handleSubmit = async (data) => {
    try {
      const res = await fetch(BaseUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      return result;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return handleSubmit;
}
