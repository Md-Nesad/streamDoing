import AgencisTabs from "../../components/agencies/AgencisTab";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function Agencies() {
  return (
    <>
      <TitleAndSubTitle
        title="Agency Management"
        subtitle="Manage host and Master Agencies"
      />

      <AgencisTabs />
    </>
  );
}
