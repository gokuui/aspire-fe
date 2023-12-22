import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddCardModal({ addCard, closeModal }) {
  const [cardName, setCardName] = useState("");

  const handleSubmit = () => {
    const formEl = document.querySelector(".add-new-card-form");

    // TODO: use React hook forms when form becomes complex
    // for now, using html form validation methods
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    addCard(cardName);
  };

  return (
    <Modal
      show={true}
      onHide={closeModal}
      size="md"
      aria-labelledby="add-card-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="add-card-modal">Add New Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          className="add-new-card-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <Form.Group className="mb-3" controlId="card-name">
            <Form.Label>Card Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter Name"
              autoFocus
              required
              minLength={3}
              onChange={(e) => setCardName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} variant="secondary">
          Close
        </Button>
        <Button
          onClick={handleSubmit}
          style={{
            backgroundColor: "var(--app-primary)",
            borderColor: "var(--app-primary)",
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCardModal;
