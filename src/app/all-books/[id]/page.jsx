import Image from 'next/image';
import React from 'react';

const BookDetails = async ({ params }) => {
  const { id } = await params;
const response = await fetch(
    "https://spinebookborrowing.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  const book = booksData.find((book) => book.id == id);

  return (
    <div className='flex flex-col md:flex-row gap-10 p-10 '>
      <div>
        <Image src={book.image_url} alt={book.title} width={300} height={400} />
      </div>
      <div>
        <h1 className='text-5xl font-bold '>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.category}</p>
        <p>{book.available_quantity} in stock</p>
        <p>Rating: {book.rating} / 5</p>
        <p>{book.description}</p>
        <div>
          <button className='px-4 py-2 bg-emerald-500 text-white rounded'>Borrow</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
