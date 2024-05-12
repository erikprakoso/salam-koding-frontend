import { TbCategory } from "react-icons/tb";
import APICategory from "../../services/category.service";
import useQuery from "../../hooks/useQuery";
import { CONST } from "../../utils/Constants";

export default function CategoryCard() {
  // Menggunakan useQuery untuk mendapatkan data kategori
  const categories = useQuery(() => APICategory.findCategories());

  // Destructuring data dari useQuery
  const { data } = categories;

  const handleCategory = (category) => {
    window.location.href = `/category?category=${category}`;
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-1">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-1">
            <div className="group relative bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <TbCategory className="mr-2" /> Kategori
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-y-1">
                  {data?.map((item) => (
                    <button
                      key={item?.id}
                      type="button"
                      className={`bg-${item?.attributes?.color}-100 hover:bg-${item?.attributes?.color}-300 rounded-md px-3 py-1 text-sm font-medium text-${item?.attributes?.color}-700 border-${item?.attributes?.color}-300 border-2 cursor-pointer flex items-center space-x-2`}
                      onClick={() => handleCategory(item?.attributes?.name)}
                    >
                      <img
                        src={
                            item?.attributes?.thumbnail &&
                            CONST.IMG_URL_API +
                              item?.attributes?.thumbnail?.data?.attributes?.url
                          }
                        alt={item?.attributes?.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span>{item?.attributes?.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
