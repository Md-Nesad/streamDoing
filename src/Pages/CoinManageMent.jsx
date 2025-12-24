import StatsSection from "../adminPanel/components/dashboard/StatsCard";
import { coinsAgencies } from "../data/data";
import CoinAgencyTable from "../adminPanel/components/coinAgency/CoinAgencyTable";
import SellCoins from "../adminPanel/components/coinAgency/SellCoins";
import TabsSection from "../adminPanel/components/coinAgency/Tabs";

export default function CoinManageMent() {
  return (
    <div>
      <StatsSection data={coinsAgencies} />
      <TabsSection />
      <SellCoins />
      <CoinAgencyTable />
    </div>
  );
}
