import React from "react";
import Modal from "react-modal";
import "./MarkdownEditor.css";
Modal.setAppElement("#root");

const PlaceholderModal = ({
  isOpen,
  onRequestClose,
  placeholders,
  setPlaceholders,
  onSubmit,
}) => {
  const handlePlaceholderChange = (index, field, value) => {
    const newPlaceholders = [...placeholders];
    newPlaceholders[index][field] = value;
    setPlaceholders(newPlaceholders);
  };

  const addPlaceholder = () => {
    setPlaceholders([...placeholders, { key: "", value: "" }]);
  };

  const removePlaceholder = (index) => {
    const newPlaceholders = placeholders.filter((_, i) => i !== index);
    setPlaceholders(newPlaceholders);
  };

  const handleSubmit = () => {
    onSubmit(placeholders);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Placeholder Modal"
      className="modal"
      overlayClassName="overlay">
      <h2>Add Placeholders</h2>
      {placeholders.map((placeholder, index) => (
        <div
          key={index}
          className="placeholder-input">
          <input
            type="text"
            placeholder="Key"
            value={placeholder.key}
            onChange={(e) =>
              handlePlaceholderChange(index, "key", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Value"
            value={placeholder.value}
            onChange={(e) =>
              handlePlaceholderChange(index, "value", e.target.value)
            }
          />
          <button
            className="remove-placeholder-button"
            onClick={() => removePlaceholder(index)}>
            &times;
          </button>
        </div>
      ))}
      <button
        onClick={addPlaceholder}
        className="add-placeholder-button">
        +
      </button>
      <button
        onClick={handleSubmit}
        className="submit-button">
        Insert Placeholders
      </button>
      <button
        onClick={onRequestClose}
        className="close-button">
        Close
      </button>
    </Modal>
  );
};

export default PlaceholderModal;
