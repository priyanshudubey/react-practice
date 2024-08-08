import React, { useState } from "react";
import { marked } from "marked";
import PlaceholderModal from "./PlaceholderModal";
import "./MarkdownEditor.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeholders, setPlaceholders] = useState([{ key: "", value: "" }]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const insertText = (text) => {
    const textarea = document.querySelector("textarea");
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    setMarkdown(markdown.slice(0, startPos) + text + markdown.slice(endPos));
    textarea.focus();
  };

  const getMarkdownText = () => {
    marked.setOptions({
      breaks: true,
      gfm: true,
      sanitize: false,
    });
    const rawMarkup = marked(replacePlaceholders(markdown, placeholders));
    return { __html: rawMarkup };
  };

  const replacePlaceholders = (text, placeholders) => {
    let replacedText = text;
    placeholders.forEach(({ key, value }) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      replacedText = replacedText.replace(regex, value);
    });
    return replacedText;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlaceholderSubmit = (newPlaceholders) => {
    setPlaceholders(newPlaceholders);
    closeModal();
  };

  return (
    <div className="markdown-editor">
      <h1>Email Template System</h1>
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Create your email template..."
      />
      <div className="toolbar">
        <button onClick={() => insertText("**bold**")}>
          <b>B</b>
        </button>
        <button onClick={() => insertText("_italic_")}>
          <i>I</i>
        </button>
        <button onClick={() => insertText("<u>underline</u>")}>
          <u>U</u>
        </button>
        <button onClick={() => insertText("\n- List Item 1\n- List Item 2\n")}>
          &#x2630;
        </button>
        <button
          onClick={() =>
            insertText('<span style="color:red;">color text</span>')
          }>
          <span style={{ color: "red" }}>A</span>
        </button>
        <button
          onClick={() =>
            insertText('<span style="font-family:Arial;">font family</span>')
          }>
          <span style={{ fontFamily: "Arial" }}>F</span>
        </button>
        <button onClick={openModal}>Placeholders</button>
      </div>
      <h2>Preview</h2>
      <div
        className="preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
      <PlaceholderModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        placeholders={placeholders}
        setPlaceholders={setPlaceholders}
        onSubmit={handlePlaceholderSubmit}
      />
    </div>
  );
};

export default MarkdownEditor;
