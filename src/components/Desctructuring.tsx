import React from "react";
import internal from "stream";

type Props = {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
  category: Category;
};

export enum Category {
  TS = "TypeScript",
  PY = "Python",
}

const Desctructuring = ({
  title,
  content,
  commentQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQty}</p>
      <p>tags: {tags.map((tag) => `#${tag},`)}</p>
      <p>Categoria: {category}</p>
    </div>
  );
};

export default Desctructuring;
