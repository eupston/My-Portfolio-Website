import React from 'react';
import Modal from "react-bootstrap/Modal";
import Table from 'react-bootstrap/Table';
import classes from './AboutModal.module.css'

const courses = [
    {
        Course: "CS 1520 Data Structures",
        Institution: "University of Northern Iowa",
        CertificationURL: ""
    },
    {
        Course: "Fundamentals of Computing Specialization",
        Institution: "Coursera",
        CertificationURL: "https://www.coursera.org/account/accomplishments/specialization/W9274F6U5KUC"
    },
    {
        Course: "Object Oriented Programming in Java Specialization",
        Institution: "Coursera",
        CertificationURL: "https://www.coursera.org/account/accomplishments/specialization/6X5ZCAE4VJKJ"
    },
    {
        Course: "Spring & Hibernate for Beginners (includes Spring Boot)",
        Institution: "Udemy",
        CertificationURL: "https://www.udemy.com/certificate/UC-62W3W3ZR/"
    },
    {
        Course: "Machine Learning A-Z: Hands-On Python & R In Data Science",
        Institution: "Udemy",
        CertificationURL: "http://ude.my/UC-LQCF5JY4"
    },
    {
        Course: "Python GUI Programming Recipes using PyQt5",
        Institution: "Udemy",
        CertificationURL: "http://ude.my/UC-HISPK06G"
    },
    {
        Course: "Beginning C++ Programming - From Beginner to Beyond",
        Institution: "Udemy",
        CertificationURL: "https://www.udemy.com/certificate/UC-NQH60I3G/"
    },
    {
        Course: "Computer Science 101",
        Institution: "Stanford",
        CertificationURL: "https://prod-cert-bucket.s3.amazonaws.com/downloads/51cd05dc05a54d99a43b7b7556a1fe89/Statement.pdf"
    },
    {
        Course: "Python 3 Tutorial Course",
        Institution: "SoloLearn",
        CertificationURL: "https://www.sololearn.com/Certificate/1073-7741992/pdf/"
    },
    {
        Course: "C++ Tutorial Course",
        Institution: "SoloLearn",
        CertificationURL: "https://www.sololearn.com/Certificate/1051-7741992/pdf/"
    },
    {
        Course: "Java Tutorial Course",
        Institution: "SoloLearn",
        CertificationURL: "https://www.sololearn.com/Certificate/1068-7741992/pdf/"
    },
    {
        Course: "Javascript Tutorial Course",
        Institution: "SoloLearn",
        CertificationURL: "https://www.sololearn.com/Certificate/1024-7741992/pdf/"
    },
    {
        Course: "Creative Applications of Deep Learning with TensorFlow",
        Institution: "Kadenze",
        CertificationURL: "https://www.kadenze.com/certificates/verified/S8RAG5MS?utm_campaign=certificate_share&utm_content=certificate%3DS8RAG5MS&utm_medium=share&utm_source=kadenze"
    },
    {
        Course: "Intro to Audio Plugin Development",
        Institution: "Kadenze",
        CertificationURL: "https://www.kadenze.com/certificates/8U9ZJFFY"
    },
    {
        Course: "Real-Time Audio Signal Processing in Faust",
        Institution: "Kadenze",
        CertificationURL: "https://www.kadenze.com/certificates/X5LB54WZ"
    },

];

const coursesElement = courses.map(course => {
    return (<tr>
             <td>{course.Institution}</td>
             <td>{course.Course}</td>
             <td>{course.CertificationURL ? <a href={course.CertificationURL}>Certificate</a> : "Upon Request"}</td>
             </tr>);
 })

const AboutModal = (props) => {
    return (
        <div className={classes.AboutModal}>
            <Modal show={props.show} onHide={props.onHide} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Online CS Courses</Modal.Title>
                </Modal.Header>
                <Table striped bordered hover className={classes.Table}>
                    <thead>
                        <tr>
                        <th><b>Institution</b></th>
                        <th><b>Course</b></th>
                        <th><b>Certification</b></th>
                        </tr>
                    </thead>
                    <tbody>
                    {coursesElement}
                    </tbody>
                </Table>
            </Modal>
        </div>
    );
}

export default AboutModal;