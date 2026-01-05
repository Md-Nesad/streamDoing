import React from "react";

export default function usePutApi(baseUrl) {
  const handleFormData = async (formData) => {
    try {
      const res = await fetch(baseUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: formData,
      });
      const data = await res.json();

      //   if (!res.ok) {
      //     throw new Error(data.message || "Something went wrong");
      //   }
      return data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  return handleFormData;
}
