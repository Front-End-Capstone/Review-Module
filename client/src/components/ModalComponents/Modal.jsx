import React, { Component } from "react";
import ModalHead from "./ModalHead.jsx";
import ModalBody from "./ModalBody.jsx";

class Modal extends Component {
  render() {
    const show = {
      display: this.props.show ? "block" : "none"
    };

    return (
      <div
        className="modal-wrapper"
        style={show}
        onClick={() => this.props.modal()}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-guts">
              <ModalHead />
              {this.props.data.map(review => {
                return <ModalBody review={review} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
