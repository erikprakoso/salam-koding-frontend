import { IoIosArrowForward } from "react-icons/io";

export default function HomeButton() {
  return (
    <div className="bg-gray-200 flex justify-center py-2">
      <button
        type="button"
        className="flex items-center bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Lihat Semua Artikel <IoIosArrowForward className="ml-1" />
      </button>
    </div>
  );
}
