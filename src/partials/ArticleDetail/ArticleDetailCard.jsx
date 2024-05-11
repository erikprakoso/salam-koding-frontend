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
  // Menggunakan useParams untuk mendapatkan id artikel
  const { id } = useParams();

  // Menggunakan useQuery untuk mendapatkan data artikel berdasarkan id
  const article = useQuery(() => APIArticle.findArticleById(id));

  // Destructuring data dari useQuery
  const { data } = article;

  // Options for js-beautify
  const options = {
    indent_size: 2,
    space_in_empty_paren: true,
    brace_style: "collapse",
    wrap_line_length: 50,
    break_chained_methods: true,
    indent_scripts: "keep",
    max_preserve_newlines: 2,
    unescape_strings: true,
    jslint_happy: true,
    end_with_newline: true,
    wrap_attributes: "auto",
    indent_inner_html: true,
    comma_first: false,
    e4x: true,
    indent_char: " ",
    indent_level: 0,
    preserve_newlines: true,
    space_before_conditional: true,
    wrap_attributes_indent_size: 4,
    extra_liners: [
      "html",
      "head",
      "body",
      "/html",
      "/head",
      "/body",
      "script",
      "style",
    ],
  };

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
            <div className="flex items-center">
              <img
                src={
                  data?.attributes?.author?.data?.attributes?.thumbnail &&
                  CONST.IMG_URL_API +
                    data?.attributes?.author?.data?.attributes?.thumbnail?.data
                      ?.attributes?.url
                }
                alt="Author"
                className="inline-block h-14 w-14 rounded-full"
              />
              <p className="ml-6 mt-2 text-md text-gray-500">
                {/* Menampilkan fullname */}
                <span className="font-bold text-md">
                  {data?.attributes?.author?.data?.attributes?.fullname}
                </span>
                {/* Menampilkan position */}
                <br />
                <span className="italic text-sm">
                  {data?.attributes?.author?.data?.attributes?.position}
                </span>
                <br />
                {/* Menampilkan date */}
                <span className="font-bold text-xs">
                  {new Date(data?.attributes?.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <img
                src={
                  data?.attributes?.thumbnail &&
                  CONST.IMG_URL_API +
                    data?.attributes?.thumbnail?.data?.attributes?.url
                }
                alt="Front of men's Basic Tee in black."
                className="mt-1 h-full w-full object-cover object-center lg:h-full lg:w-full rounded-xl"
              />
            </div>
            <div className="mt-4">
              {data?.attributes?.body?.map((paragraph, index) => (
                <div key={index} className="mb-4">
                  {paragraph.type === "code" ? (
                    <div className="relative">
                      <div className="absolute right-4 top-4 z-10">
                        <CopyToClipboard
                          text={paragraph.children[0].text}
                          onCopy={() => handleCopy(index)}
                        >
                          <button
                            className={`px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
                              copiedStates[index] ? "font-bold" : ""
                            }`}
                          >
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
                          {js_beautify(paragraph.children[0].text, options)}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  ) : (
                    paragraph.children.map((child, childIndex) => (
                      <div key={childIndex} className="mb-1">
                        <span
                          className={
                            child.code
                              ? "px-2 py-1 rounded-md"
                              : child.bold // Check if bold is true
                              ? "font-bold" // Apply font-bold class if true
                              : ""
                          }
                        >
                          {child.text}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
