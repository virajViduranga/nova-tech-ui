import FilterSidebar from "../../../components/FilterSidebar";
import Navbar from "../../../components/Navbar";
import Cards from "../../../components/Cards";
import Footer from "../../../components/Footer";

export default function SearchPage() {
  return (
    <>
   
      <div className="max-w-full min-h-screen flex flex-col">
         <Navbar />
        <div className="flex flex-1 w-full">
          <FilterSidebar />

          {/* Added 'w-full' so this container takes up the rest of the empty black space */}
          <div className="flex flex-col bg-amber-50 w-full p-6">
            <h1 className="text-black text-2xl font-bold mb-4">
              Search Results
            </h1>

            <div className="flex">
              <Cards />
            </div>
          </div>
        </div>
    <Footer/>
      </div>
    </>
  );
}
