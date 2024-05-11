import APIArticle from "../../services/article.service";
import useQuery from "../../hooks/useQuery";
import { CONST } from "../../utils/Constants";

export default function HomeCard() {
  // Menggunakan useQuery untuk mendapatkan data artikel
  const articles = useQuery(() => APIArticle.findArticles("desc", 1, 6));

  // Destructuring data dari useQuery
  const { data } = articles;

  // Fungsi untuk mengarahkan ke halaman detail artikel
  const handleArticleDetail = (id) => {
    window.location.href = `/article/${id}`;
  };

  // Fungsi untuk mengarahkan ke halaman author
  const handleAuthor = (id) => {
    window.location.href = `/author/${id}`;
  };

  const handleTag = (tag) => {
    window.location.href = `/tag?tag=${tag}`;
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-1">
            {data?.map((item) => (
              <div
                key={item?.id}
                className="group relative bg-white overflow-hidden shadow rounded-lg"
              >
                <div
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60"
                  onClick={() => handleArticleDetail(item?.id)}
                >
                  <img
                    src={
                      item?.attributes?.thumbnail &&
                      CONST.IMG_URL_API +
                        item?.attributes?.thumbnail?.data?.attributes?.url
                    }
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                  />
                </div>
                <div className="p-4">
                  <div className="mt-4 flex justify-between">
                    <div>
                      {item?.attributes?.tags?.data.map((tag) => (
                        <button
                          key={tag?.id}
                          type="button"
                          className={`bg-${tag?.attributes?.color}-100 hover:bg-${tag?.attributes?.color}-300 rounded-md px-3 py-1 text-sm font-medium text-${tag?.attributes?.color}-700 border-${tag?.attributes?.color}-300 border-2 cursor-pointer`}
                          onClick={() => handleTag(tag?.attributes?.name)}
                        >
                          {tag?.attributes?.name}
                        </button>
                      ))}
                      <h3 className="mt-4 text-sm font-medium text-gray-900">
                        <a
                          href="#"
                          className="cursor-pointer"
                          onClick={() => handleArticleDetail(item?.id)}
                        >
                          {item?.attributes?.title}
                        </a>
                      </h3>
                      <hr className="mt-2 border-gray-200" /> {/* Divider */}
                      <div className="mt-2 flex items-center">
                        <a
                          href="#"
                          className="cursor-pointer"
                          onClick={() =>
                            handleAuthor(item?.attributes?.author?.data?.id)
                          }
                        >
                          <span className="text-sm font-medium text-gray-900">
                            {
                              item?.attributes?.author?.data?.attributes
                                ?.fullname
                            }
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
