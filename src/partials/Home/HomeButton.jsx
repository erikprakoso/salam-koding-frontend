import { IoIosArrowForward } from "react-icons/io";

export default function HomeButton() {

  // Fungsi untuk mengarahkan ke halaman artikel
  const handleArticle = () => {
    window.location.href = "/article";
  };
  
  return (
    <div className="bg-gray-100 flex justify-center py-2">
      <button
        type="button"
        className="flex items-center bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 cursor-pointer"
        onClick={handleArticle}
      >
        Lihat Semua Artikel <IoIosArrowForward className="ml-1" />
      </button>
    </div>
  );
}
