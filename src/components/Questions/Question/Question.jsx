import styles from "./Question.module.css";
import iconPlus from "./imgs/iconPlus.png";
import iconMinus from "./imgs/iconMinus.png";
import { useState, useRef } from "react";
import cn from "classnames";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(styles.main, { [styles.activeBackground]: isOpen })}
      onClick={toggleAnswer}
    >
      <div
        className={cn(styles.question, {
          [styles.activeColor]: isOpen,
        })}
      >
        <h4>{question}</h4>
        <img src={isOpen ? iconMinus : iconPlus} alt="" />
      </div>
      <div
        className={cn(styles.answerWrapper, { [styles.open]: isOpen })}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current.scrollHeight : 0,
        }}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
