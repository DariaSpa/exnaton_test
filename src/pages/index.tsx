import DefaultLayout from "@/layouts/default";
import EnergyDashboard from "@/components/energy-dashboard/energy-dashboard";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 ">
        <EnergyDashboard />
      </section>
    </DefaultLayout >
  );
}
