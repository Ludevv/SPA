import React from "react";

const Article = (props) => {
  const styles = {
    marginTop: 40,
  };

  const { title, author, text } = props;
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <span>{author}</span>
      <p
        style={{
          fontSize: 15,
        }}
      >
        {text}
      </p>
    </article>
  );
};

export default Article;
