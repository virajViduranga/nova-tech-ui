import FilterSidebar from "../../../components/FilterSidebar";
import Navbar from "../../../components/Navbar";

export default function SearchPage(){
    return(
        <>
      <div className="max-w-full">
          <Navbar/>
        <FilterSidebar />
      </div>
        </>
    );
}