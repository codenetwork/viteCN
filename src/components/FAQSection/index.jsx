import React, { useState } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function FAQSection({questions}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rulesLink =
    'https://docs.google.com/document/d/1aps3SSH547lTOm8puOo2tHOzZmVsEIqNqE0K5ISF9Ec/edit#heading=h.a2xy02yl38ow';
  const rulesDescription = '';

  return (
    <section className="cd-faq js-cd-faq max-width-md margin-top-lg margin-bottom-lg container">
      <div className="cd-faq__items">
        <ul className="cd-faq__group">
          <h2 className="cd-faq__title">Frequently Asked Questions</h2>
          {questions.map((faq, index) => (
            <li className="cd-faq__item" key={index}>
              <a
                className={`cd-faq__trigger ${
                  openIndex === index ? 'open' : ''
                }`}
                href="#0"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <i
                  className={`fas fa-chevron-${
                    openIndex === index ? 'up' : 'down'
                  }`}
                ></i>
              </a>
              <div
                className={`cd-faq__content ${
                  openIndex === index ? 'open' : ''
                }`}
              >
                <div className="text-component">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </li>
          ))}
          {/* <li className="cd-faq__item" key={faqs.length + 1}>
            <a
              className={`cd-faq__trigger ${
                openIndex === faqs.length + 1 ? 'open' : ''
              }`}
              href="#0"
              onClick={() => toggleFAQ(faqs.length + 1)}
            >
              <span>{'Are there any rules I should know about going into the Hackathon?'}</span>
              <i
                className={`fas fa-chevron-${
                  openIndex === faqs.length + 1 ? 'up' : 'down'
                }`}
              ></i>
            </a>
            <div
              className={`cd-faq__content ${
                openIndex === faqs.length + 1 ? 'open' : ''
              }`}
            >
              <div className="text-component">
                <p>
                We ask all Hackathon attendees to familiarise themselves with the rules of the 2024 Code Network Winter Hackathon. You can access these <a href={rulesLink}  className='link' >here</a>
                </p>
              </div>
            </div>
          </li> */}
        </ul>
      </div>

      <a href="#0" className="cd-faq__close-panel text-replace">
        Close
      </a>
      <div className="cd-faq__overlay" aria-hidden="true"></div>
    </section>
  );
};

export default FAQSection;
