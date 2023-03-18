import EmployeeChart from "@/components/EmployeeChart";
import data from "../fixture/data.json";

export default function Home() {
  return <EmployeeChart data={data} />;
}
