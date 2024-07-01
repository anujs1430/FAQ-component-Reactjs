import React, { useEffect, useState } from "react";

const FaqItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  }, []);

  const handleClick = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div className="faq-box">
      <div className="ques">
        <button className={isShow ? "arrow" : ""}>></button>
        <div className="ques" onClick={handleClick}>
          {faq.question}
        </div>
      </div>
      {isShow && <div className="ans">{faq.answer}</div>}
    </div>
  );
};

export default FaqItem;
