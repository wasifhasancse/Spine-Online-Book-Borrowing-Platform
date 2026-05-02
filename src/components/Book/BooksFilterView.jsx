"use client";

import { useState } from "react";
import { GoBook } from "react-icons/go";
import BookCard from "./BookCard";

const BooksFilterView = ({ booksData, categoriesData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getSearchValue = searchValue.trim().toLowerCase();

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch =
      getSearchValue.length === 0 ||
      book.title.toLowerCase().includes(getSearchValue);

    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-14 mx-auto max-w-10/12">
      <section>
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f3d66] md:text-sm">
            Library Collection
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-[#1f5d99] md:text-4xl lg:text-5xl">
            All Books
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#1f5d99]">
            Explore our extensive collection of books across various genres and
            categories. Whether you are looking for fiction, non-fiction,
            science, or technology, we have something for every reader. Browse
            through our library and find your next great read today!
          </p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search books by title..."
            className="w-full rounded-md border border-[#9ac5ee] bg-[#edf5ff] py-2 px-4 text-[#0f3d66] placeholder:text-[#1f5d9999] focus:outline-none focus:ring-2 focus:ring-[#1f5d99]"
          />
        </div>

        <div className="mb-6 md:hidden">
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-md border border-[#9ac5ee] bg-[#edf5ff] py-2 px-4 text-[#0f3d66] focus:outline-none focus:ring-2 focus:ring-[#1f5d99]"
          >
            <option value="All">All Categories</option>
            {categoriesData.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block w-64 mr-6">
            <h2 className="mb-4 text-lg font-bold text-[#0f3d66]">
              Categories
            </h2>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("All")}
                  className={`w-full rounded-md border px-4 py-2 text-left transition duration-300 ${
                    selectedCategory === "All"
                      ? "border-[#1f5d99] bg-[#1f5d99] text-[#eaf4ff]"
                      : "border-transparent bg-transparent text-[#1f5d99] hover:border-[#9ac5ee] hover:bg-[#93c5fd40] hover:text-[#0f3d66]"
                  }`}
                >
                  All Categories
                </button>
              </li>

              {categoriesData.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full rounded-md border px-4 py-2 text-left transition duration-300 ${
                      selectedCategory === category.name
                        ? "border-[#1f5d99] bg-[#1f5d99] text-[#eaf4ff]"
                        : "border-transparent bg-transparent text-[#1f5d99] hover:border-[#9ac5ee] hover:bg-[#93c5fd40] hover:text-[#0f3d66]"
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <p className="mb-4 text-sm font-semibold text-[#1f5d99]">
              Showing {filteredBooks.length} of {booksData.length} books
            </p>

            {filteredBooks.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#9ac5ee] bg-[#edf5ff] px-8 py-16 text-center">
                <GoBook className="mb-5 h-16 w-16 text-[#9ac5ee]" />
                <h3 className="mb-2 text-xl font-bold text-[#0f3d66]">
                  No books found
                </h3>
                <p className="mb-6 max-w-sm text-sm text-[#1f5d99]">
                  {getSearchValue && selectedCategory !== "All"
                    ? `No results for "${searchValue}" in ${selectedCategory}.`
                    : getSearchValue
                      ? `No results for "${searchValue}". Try a different title or keyword.`
                      : `No books available in the "${selectedCategory}" category yet.`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchValue("");
                    setSelectedCategory("All");
                  }}
                  className="rounded-lg bg-[#1f5d99] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0f3d66]"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BooksFilterView;
