import React from "react";
import { useState } from "react";

interface Porps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 50 }: Porps) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
