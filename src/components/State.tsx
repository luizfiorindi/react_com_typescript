import React, { useState, ChangeEvent } from "react";

const State = () => {
  const [content, setContent] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <p>Meu conteúdo: {content}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
