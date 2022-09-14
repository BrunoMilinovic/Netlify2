import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Texts = ({ texts }) => (
  <div>
    {texts.map((text) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {text.title}  TITLE TEXT
          <br />
          <cite> – {text.body} BODY TEXT</cite>
        </div>
      </article>
    ))}
  </div>
);

Texts.propTypes = {
  Texts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

export default Texts;
