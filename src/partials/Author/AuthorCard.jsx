import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import APIAuthor from "../../services/author.service";
import { CONST } from "../../utils/Constants";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function AuthorCard() {
  // Menggunakan useParams untuk mendapatkan id artikel
  const { id } = useParams();

  // Menggunakan useQuery untuk mendapatkan data artikel berdasarkan id
  const author = useQuery(() => APIAuthor.findAuthorById(id));

  // Destructuring data dari useQuery
  const { data } = author;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-32 sm:px-6 sm:py-32 lg:py-32 lg:px-8">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-lg">
            <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 pb-16 sm:pb-16 lg:pb-8">
              <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center">
                <div className="flex flex-col items-center">
                  <img
                    src={
                      data?.attributes?.thumbnail &&
                      CONST.IMG_URL_API +
                        data?.attributes?.thumbnail?.data?.attributes?.url
                    }
                    alt="Author"
                    className="inline-block h-20 w-20 rounded-full mb-4"
                  />
                  <p className="text-md text-gray-500">
                    {/* Menampilkan fullname */}
                    <span className="font-bold text-lg">
                      {data?.attributes?.fullname}
                    </span>
                    {/* Menampilkan position */}
                    <br />
                    <span className="italic text-sm">
                      {data?.attributes?.position}
                    </span>
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={`https://wa.me/${data?.attributes?.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-6 w-6 text-green-600" />
                    </a>
                    <a
                      href={data?.attributes?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="h-6 w-6 text-pink-600" />
                    </a>
                    <a
                      href={data?.attributes?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="h-6 w-6 text-blue-800" />
                    </a>
                    <a
                      href={data?.attributes?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="h-6 w-6 text-blue-600" />
                    </a>
                    <a
                      href={data?.attributes?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-6 w-6 text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
