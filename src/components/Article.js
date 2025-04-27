import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getMinutesToRead = (minutes) => {
    let emoji = minutes < 30 ? "☕️" : "🍱";
    let interval = minutes < 30 ? 5 : 10;
    let repeatCount = Math.ceil(minutes / interval);
    return emoji.repeat(repeatCount) + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{getMinutesToRead(minutes)}</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;