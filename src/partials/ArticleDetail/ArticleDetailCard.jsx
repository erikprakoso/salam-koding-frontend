import { useState } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import APIArticle from "../../services/article.service";
import { CONST } from "../../utils/Constants";
import { js_beautify } from "js-beautify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

export default function ArticleDetailCard() {
  const { id } = useParams();
  const article = useQuery(() => APIArticle.findArticleById(id));
  const { data } = article;
  const options = { indent_size: 2, space_in_empty_paren: true };

  // Initialize copiedStates array to track copy status of each code block
  const [copiedStates, setCopiedStates] = useState([]);

  // Function to handle copying and update copiedStates
  const handleCopy = (index) => {
    const newCopiedStates = [...copiedStates];
    newCopiedStates[index] = true;
    setCopiedStates(newCopiedStates);
    setTimeout(() => {
      newCopiedStates[index] = false;
      setCopiedStates(newCopiedStates);
    }, 1500);
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data?.attributes?.title}
            </h2>
            <hr className="mt-2 border-gray-200" />
            <p className="mt-1 text-md leading-8 text-gray-500">
              {data?.attributes?.author}
            </p>
            <div className="mt-4">
              <img
                src={
                  data?.attributes?.thumbnail &&
                  CONST.IMG_URL_API + data?.attributes?.thumbnail?.url
                }
                alt="Front of men's Basic Tee in black."
                className="mt-1 h-full w-full object-cover object-center lg:h-full lg:w-full rounded-xl"
              />
            </div>
            <div className="mt-4">
              {data?.attributes?.body?.map((paragraph, index) => (
                <div key={index} className="mb-4">
                  {paragraph.children.map((child, childIndex) => (
                    <div key={childIndex} className="mb-1">
                      {child.code ? (
                        <div className="relative">
                          <div className="absolute right-4 top-4 z-10">
                            <CopyToClipboard
                              text={child.text}
                              onCopy={() => handleCopy(index)}
                            >
                              <button className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                {copiedStates[index] ? "Copied!" : <FaCopy />}
                              </button>
                            </CopyToClipboard>
                          </div>
                          <div
                            className="w-full p-4 rounded-lg"
                            style={{ backgroundColor: "rgb(40, 42, 54)" }}
                          >
                            <div className="top mb-2 flex">
                              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                              <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                              <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                            </div>
                            <SyntaxHighlighter
                              language="javascript"
                              style={dracula}
                              showLineNumbers
                            >
                              {js_beautify(child.text, options)}
                            </SyntaxHighlighter>
                          </div>
                        </div>
                      ) : (
                        child.text
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
