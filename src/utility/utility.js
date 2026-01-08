export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// stream duration format
export default function duration(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const duration = end - start;
  const hours = Math.floor(duration / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
}

//money format
export function formatNumber(num) {
  if (!num) return 0;

  if (num >= 1_000_000_000_000) {
    return (num / 1_000_000_000_000).toFixed(1) + "T";
  }
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  }

  return num;
}

//percentage formater
export function formatPercent(value, decimals = 2) {
  return `${Number(value)
    .toFixed(decimals)
    .replace(/\.0+$/, "")
    .replace(/(\.\d*[1-9])0+$/, "$1")}%`;
}

//date format
export function formatOnlyDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatOnlyTime(dateString) {
  return new Date(dateString).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
