import React from 'react';
import Modal from "react-bootstrap/Modal";


const AboutModal = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={props.onHide} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>Course One etc...</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AboutModal;