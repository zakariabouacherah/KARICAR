import branchData from "../../data/Branches.json";
import BranchCard from "../../components/BranchCard";

export default function Page() {
  return (
    <div className="container max-width-container mb-5">
      <div className="row text-center mt-4 mb-3">
        <div className="col-12">
          <h1>Our branches</h1>
        </div>
      </div>

      <div className="row">
        {branchData ? (
          branchData.map((branch, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <BranchCard branch={branch} />
            </div>
          ))
        ) : (
          <div className="col-12">No branch data available</div>
        )}
      </div>
    </div>
  );
}
