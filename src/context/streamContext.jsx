import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";

const StreamContext = createContext();

export default function StreamProvider({ children }) {
  const { data: countries } = useFetch(`${BASE_URL}/countries`);
  const countriesName = (id) => {
    if (countries) {
      return countries.find((country) => country._id === id)?.name;
    }
  };

  const { data: agencies } = useFetch(
    `${BASE_URL}/admin/agencies?page=1&limit=100&search=&status=&type=`
  );

  //badge
  const { data: badges } = useFetch(
    `${BASE_URL}/badges?page=1&limit=100&search=ba`
  );

  const badgeList = badges?.badges;

  return (
    <StreamContext.Provider
      value={{ countriesName, countries, agencies, badgeList }}
    >
      {children}
    </StreamContext.Provider>
  );
}

export const useStream = () => {
  const context = useContext(StreamContext);
  if (!context) {
    throw new Error("useStream must be used within a StreamProvider");
  }
  return context;
};
