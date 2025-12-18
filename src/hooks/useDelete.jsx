export default function useDelete(baseUrl) {
  const deleteUser = async (id) => {
    try {
      // URL e id add kora holo
      const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return deleteUser;
}
