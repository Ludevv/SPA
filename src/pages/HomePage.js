import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet animi quae, eligendi earum perferendis voluptatem doloremque neque! Quae provident aperiam facilis eos voluptatum, sequi ipsum eligendi ad ullam beatae.",
  },

  {
    id: 2,
    title: "Czym jest dupa pieprzyć?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet animi quae, eligendi earum perferendis voluptatem doloremque neque! Quae provident aperiam facilis eos voluptatum, sequi ipsum eligendi ad ullam beatae.",
  },

  {
    id: 3,
    title: "Czym jest majonez?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet animi quae, eligendi earum perferendis voluptatem doloremque neque! Quae provident aperiam facilis eos voluptatum, sequi ipsum eligendi ad ullam beatae.",
  },
];

const HomePage = () => {
  const artLists = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artLists}</div>;
};

export default HomePage;
