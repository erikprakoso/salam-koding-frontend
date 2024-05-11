import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoReorderThree, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  // Menggunakan useLocation untuk mendapatkan informasi lokasi dari router
  const location = useLocation();
  // Menambahkan state untuk mengontrol visibilitas menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Menambahkan state untuk mengontrol visibilitas input pencarian
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Menambahkan state untuk menentukan apakah layar adalah tampilan mobile atau desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Mengubah state isMobile berdasarkan lebar layar
      setIsMobile(window.innerWidth < 640); // Ganti 640 dengan nilai batas ukuran layar yang sesuai
    };
    // Panggil handleResize saat dimuat dan diresapi kembali
    handleResize();
    // Tambahkan event listener untuk menangani perubahan ukuran layar
    window.addEventListener("resize", handleResize);
    return () => {
      // Hapus event listener saat komponen di-unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fungsi untuk mengarahkan ke halaman beranda
  const handleHome = () => {
    window.location.href = "/";
  };

  // Fungsi untuk mengarahkan ke halaman artikel
  const handleArticle = () => {
    window.location.href = "/article";
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Menambahkan event onClick untuk mengubah state visibilitas menu */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <IoReorderThree className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h3
                className="text-lg font-bold text-gray-900 cursor-pointer"
                onClick={handleHome}
              >
                SalamKoding
              </h3>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`bg-${location.pathname === '/' ? 'gray' : ''}-900 text-${location.pathname === '/' ? 'white' : 'gray-500'} rounded-md px-3 py-2 text-sm font-medium`}
                  aria-current="page"
                  onClick={handleHome}
                >
                  Beranda
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-2 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`bg-${location.pathname === '/article' ? 'gray' : ''}-900 text-${location.pathname === '/article' ? 'white' : 'gray-500'} rounded-md px-3 py-2 text-sm font-medium`}
                  aria-current="page"
                  onClick={handleArticle}
                >
                  Artikel
                </a>
              </div>
            </div>
          </div>
          {/* Menambahkan input pencarian hanya pada tampilan desktop */}
          {!isMobile && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Menambahkan input pencarian */}
              {isSearchOpen ? (
                <div className="relative">
                  <input
                    type="text"
                    className="relative rounded bg-gray-100 text-gray-900 placeholder-gray-400 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    placeholder="Cari"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <span className="sr-only">Close search</span>
                    <IoClose className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Cari</span>
                  <FaSearch className="h-6 w-6" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Tampilan menu untuk mode mobile */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Tambahkan input pencarian di sini */}
          <div className="relative">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Cari"
            />
          </div>
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
            onClick={handleHome}
          >
            Beranda
          </a>
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={handleArticle}
          >
            Artikel
          </a>
        </div>
      </div>
    </nav>
  );
}
