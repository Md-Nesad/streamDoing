export default function useJsonPost(BaseUrl) {
  const handleSubmit = async (data) => {
    try {
      const res = await fetch(BaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      return result;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return handleSubmit;
}
