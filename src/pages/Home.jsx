import CategoryCard from "../partials/Home/CategoryCard";
import HomeButton from "../partials/Home/HomeButton";
import HomeCard from "../partials/Home/HomeCard";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <HomeCard />
              <HomeButton />
            </div>
            <div>
              <CategoryCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
