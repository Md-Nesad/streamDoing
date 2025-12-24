import AgencisTabs from "../../adminPanel/components/agencies/AgencisTab";
import TitleAndSubTitle from "../../adminPanel/components/TitleAndSubTitle";

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
