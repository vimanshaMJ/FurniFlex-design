import Accordion from "react-bootstrap/Accordion";
import classes from "../Components/QAAccordion.module.css";
import { useState } from "react";

export default function QASection() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const data = [
    {
      id: 1,
      question: "How do I choose the right furniture for my space?",
      answer:
        "We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship",
    },
    {
      id: 2,
      question: "What materials are your furniture items made of?",
      answer:
        "We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship",
    },
    {
      id: 3,
      question: "What is your delivery process?",
      answer:
        "We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship",
    },
    {
      id: 4,
      question: "What is your return and exchange policy?",
      answer:
        "We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship",
    },
    {
      id: 5,
      question: "How can I contact customer support for assistance?",
      answer:
        "We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship",
    },
  ];

  return (
    <div className={`row ${classes.qaSection}`}>
      {data.map((item) => (
        <Accordion>
          <Accordion.Item eventKey={item.id} className={classes.accItem}>
            <Accordion.Header
              className={classes.accHeader}
              onClick={() => toggleItem(item.id)}
            >
              {item.question}
              <span className={classes.icon}>
                {openItems[item.id] ? (
                  <span
                    className={`material-symbols-outlined ${classes.buttonIcon}`}
                  >
                    close
                  </span>
                ) : (
                  <span
                    className={`material-symbols-outlined ${classes.buttonIcon}`}
                  >
                    line_end_arrow
                  </span>
                )}
              </span>
            </Accordion.Header>
            <Accordion.Body className={classes.accBody}>
              {item.answer}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}
