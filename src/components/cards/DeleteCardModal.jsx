import { Button, Modal } from "react-bootstrap";

function DeleteCardModal({ deleteCard, closeModal }) {
  return (
    <Modal
      show={true}
      onHide={closeModal}
      size="md"
      aria-labelledby="delete-card-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="delete-card-modal">Cancel Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to Cancel this card?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} variant="secondary">
          Close
        </Button>
        <Button
          onClick={deleteCard}
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

export default DeleteCardModal;
