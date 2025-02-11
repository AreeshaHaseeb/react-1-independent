import React from "react";

type BookProps = {
  logo: string;  // Image path as string
  title: string;
  author: string;
};

const Book: React.FC<BookProps> = ({ logo, title, author }) => {
  return (
    <div className="book">
      <img src={logo} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
