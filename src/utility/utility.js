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
