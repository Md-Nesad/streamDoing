import AdminTabs from "../components/adminSettings/Tab";
import TitleAndSubTitle from "../components/TitleAndSubTitle";

export default function AdminSettings() {
  return (
    <div>
      <TitleAndSubTitle
        title="Admin Settings"
        subtitle="Manage your admin account settings and preferences."
      />
      <AdminTabs />
    </div>
  );
}
