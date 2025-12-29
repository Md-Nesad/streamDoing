import StatsSection from "../components/dashboard/StatsCard";
import { coinsAgencies } from "../data/data";
// import CoinAgencyTable from "../components/coinAgency/CoinAgencyTable";
// import SellCoins from "../components/coinAgency/SellCoins";
import TabsSection from "../components/coinAgency/Tabs";

export default function CoinManageMent() {
  return (
    <div>
      <StatsSection data={coinsAgencies} />
      <TabsSection />
      {/* <SellCoins />
      <CoinAgencyTable /> */}
    </div>
  );
}
