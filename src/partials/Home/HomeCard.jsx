import APIArticle from "../../services/article.service";
import useQuery from "../../hooks/useQuery";
import { CONST } from "../../utils/Constants";

export default function HomeCard() {
  const articles = useQuery(() => APIArticle.findArticles());
  const { data } = articles;

  return (
    <>
      <div className="bg-gray-200">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-1">
            {data?.attributes.map((item) => (
              <div
                key={item?.id}
                className="group relative bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <img
                    src={
                      item?.thumbnail &&
                      CONST.IMG_URL_API + item?.thumbnail?.url
                    }
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="p-4">
                  <div className="mt-4 flex justify-between">
                    <div>
                      {item?.tags.map((tag) => (
                        <button
                          key={tag?.id}
                          type="button"
                          className={`bg-${tag?.color}-100 hover:bg-${tag?.color}-300 rounded-md px-3 py-1 text-sm font-medium text-${tag?.color}-700 border-${tag?.color}-300 border-2`}
                        >
                          {tag?.name}
                        </button>
                      ))}
                      <h3 className="mt-4 text-sm font-medium text-gray-900">
                        <a href="#" className="group-hover:underline">
                          {item?.title}
                        </a>
                      </h3>
                      <hr className="mt-2 border-gray-200" /> {/* Divider */}
                      <div className="mt-2 flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {item?.author}
                        </span>
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
