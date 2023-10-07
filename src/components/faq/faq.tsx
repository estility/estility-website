import React, { useState, useEffect } from 'react'
import { estateMgt, estateSecurity, residentApp, partners, faqTopics, allQuestions } from './faq-questions';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './faq.css';

interface FAQItemProps {
  id?: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [selectedTopic, setSelectedTopic] = useState("Estate Management");
  const [ selectedTopicQuestions, setSelectedTopicQuestions ] = useState<FAQItemProps[]>(estateMgt);

  function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = (e:any) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    };

    return (
      <div className={`faq-item ${isOpen ? "open" : ""}`}>
        <div className="faq-question" onClick={toggleAnswer}>
          <div className="question sora-font">{question}</div>
          <button className="faq-toggle-icon">
            {isOpen ? <FaMinus color="#3A354180" /> : <FaPlus color="#3A354180" />}
          </button>
        </div>
        <div className={`faq-answer ${isOpen ? "open" : ""}`}>
          {isOpen && <div className="answer-content">{answer}</div>}
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (selectedTopic === "Partner") {
      setSelectedTopicQuestions(partners);
    } else if (selectedTopic === "Estate Security") {
      setSelectedTopicQuestions(estateSecurity);
    } else if (selectedTopic === "Resident App") {
      setSelectedTopicQuestions(residentApp);
    } else if (selectedTopic === '') {
      setSelectedTopicQuestions(allQuestions);
    }else {
      setSelectedTopicQuestions(estateMgt);
    }
  }, [selectedTopic]);

  const selectTopic = (topic: string) => {
    setSelectedTopic(topic);
  }

  console.log(selectedTopic)

  return (
    <div className='d-flex flex-column faq-container'>
      <div className='faq-heading text-center sora-font violet-color'>Frequently asked Questions(FAQs)</div>
      <div className='text-center faq-subtitle sora-font'>Here are the answers to the most commonly asked questions about our services and offerings.</div>
     <div className='d-flex justify-content-between faq-topics'>
      {faqTopics.map((text, index) => (
        <button key={text?.id} className={`faq-topic sora-font ${selectedTopic === text?.title ? 'active' : ''}`} onClick={() => selectTopic(text?.title)}>{text?.title}</button>
      ))}
     </div>
     <div className='d-flex flex-column faq-content-items gap-10'>
      { [...new Set(selectedTopicQuestions)].map((question, index) => (
        <FAQItem key={question?.id} question={question?.question} answer={question?.answer} />
      ))}
     </div>
     <div className='view-all-button'><button onClick={() => setSelectedTopic('')} disabled={selectedTopic===''} className='violet-background text-white sora-font view-all'>View all FAQs</button></div>
    </div>
  )
}

export default Faq