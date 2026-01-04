import FAQsList from "../../components/supportTeamPortal/SupportDashboardComponents/FAQsList";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function FAQs() {
  return (
    <>
      <TitleAndSubTitle
        title="FAQ Management"
        subtitle="Create and manage help center articles"
      />

      <FAQsList />
    </>
  );
}
