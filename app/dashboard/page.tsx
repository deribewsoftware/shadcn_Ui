import SummaryCard from "@/components/card/summaryCard";

const Dashboard = () => {
  return ( <div className="flex flex-col gap-10 mt-10">
    <div className="flex flex-col md:flex-row gap-4">
      <SummaryCard/>
      <SummaryCard/>
      <SummaryCard/>
      <SummaryCard/>
    </div>

    <div className="">
      
    </div>
  
  </div> );
}
 
export default Dashboard;