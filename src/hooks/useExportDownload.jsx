import { useState } from "react";

export function useExportDownload() {
  const [loading, setLoading] = useState(false);

  const download = async (url, fileName = "export.csv") => {
    try {
      setLoading(true);

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
      });

      if (!res.ok) throw new Error("Export failed");

      const blob = await res.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = fileName;
      a.click();

      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error(err);
      alert("Export failed");
    } finally {
      setLoading(false);
    }
  };

  return { download, loading };
}
