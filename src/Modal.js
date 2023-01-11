import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CentralModal = (props) => {
  return (
    props.pokemondata && (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.pokemondata[props.indextracker].name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Evolves from:{" "}
            {props.pokemondata[props.indextracker].evolvesFrom
              ? props.pokemondata[props.indextracker].evolvesFrom
              : `Not Evolved`}
          </p>
          <p>
            Level:{" "}
            {props.pokemondata[props.indextracker].level
              ? props.pokemondata[props.indextracker].level
              : `Not Available`}
          </p>
          <p>
            Rarity:{" "}
            {props.pokemondata[props.indextracker].rarity
              ? props.pokemondata[props.indextracker].rarity
              : `Not Available`}
          </p>
          <p>
            Type:{" "}
            {props.pokemondata[props.indextracker].types
              ? props.pokemondata[props.indextracker].types
              : `Not Available`}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default CentralModal;
