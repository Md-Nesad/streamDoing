export default function useDelete(baseUrl) {
  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  return deleteUser;
}
