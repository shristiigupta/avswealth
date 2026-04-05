import ServicePage from "../../components/ServicePage";
import { wealthPlanningData } from "../../data/servicesData";

export default function WealthPlanning() {
  return <ServicePage service={wealthPlanningData} />;
}