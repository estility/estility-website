import React, { useState, useEffect } from 'react'
import { estateMgt, estateSecurity, residentApp, partners, faqTopics, allQuestions } from './faq-questions';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './questions.css';

interface FAQItemProps {
  id?: number;
  question: string;
  answer: string;
}

const Questions = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [ searchData, setSearchData] = useState<FAQItemProps[]>(estateMgt);

  useEffect(() => {
    setSearchData(estateMgt);
  }, []);

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
    // setSearchData(searchData?.filter((item) => item?.question?.toLowerCase()?.indexOf(e.target.value.toLowerCase()) >=0))
    setSearchData(
      allQuestions.filter((item:any) =>
      item?.question?.toLowerCase().includes(e.target.value.toLowerCase())
      )  as any
      );
    };
    
    console.log(searchData)
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
    if (searchValue === "" && selectedTopic === "Partners") {
      setSearchData(partners);
    } else if (searchValue === "" && selectedTopic === "Estate Security") {
      setSearchData(estateSecurity);
    } else if (searchValue === "" && selectedTopic === "Resident App") {
      setSearchData(residentApp);
    } else if (searchValue === "") {
      setSearchData(estateMgt);
    } else if(searchValue === "" && selectedTopic === 'All') {
      setSearchData(allQuestions as any);
    }
    else {
      console.log({searchValue})
      setSearchData(
        allQuestions.filter((item:any) =>
        item?.question?.toLowerCase().includes(searchValue?.toLowerCase())
        ) as any
        );
    }
  }, [selectedTopic, searchValue]);

  useEffect(() => {
    if (selectedTopic === "Partners") {
      setSearchData(partners);
    } else if (selectedTopic === "Estate Security") {
      setSearchData(estateSecurity);
    } else if (selectedTopic === "Resident App") {
      setSearchData(residentApp);
    } else if (selectedTopic === 'All') {
      setSearchData(allQuestions as any);
    }else {
      setSearchData(estateMgt);
    }
  }, [selectedTopic]);

  const selectTopic = (topic: string) => {
    setSelectedTopic(topic);
  }

  console.log(selectedTopic)

  return (
    <div className='d-flex flex-column faq-container'>
      {window.location.pathname === '/faq' ? 
      <div className='faq-banner'>
      <div className='faq-banner-text sora-font'>Frequently asked Questions(FAQs)</div>
      <div className='faq-banner-subtext sora-font'>Here are the answers to the most commonly asked questions about our services and offerings.</div>
      <div className="">
        <div className="search-icon">
          {/* <img src={search} alt="" /> */}
        </div>
        <input
          onChange={handleSearch}
          className=""
          type="text"
          name='search'
          placeholder="Search frequently asked questions"
        />
      </div>
    </div> 
      : null}
      <div className='faq-heading text-center sora-font violet-color'>Frequently asked Questions(FAQs)</div>
      <div className='text-center faq-subtitle sora-font'>Here are the answers to the most commonly asked questions about our services and offerings.</div>
     <div className='d-flex justify-content-between faq-topics'>
      {faqTopics.map((text, index) => (
        <button key={text?.id} className={`faq-topic sora-font ${selectedTopic === text?.title ? 'active' : ''}`} onClick={() => selectTopic(text?.title)}>{text?.title}</button>
      ))}
     </div>
     <div className='d-flex flex-column faq-content-items gap-10'>
      { searchData.map((question, index) => (
        <FAQItem key={question?.id} question={question?.question} answer={question?.answer} />
      ))}
     </div>
     <div className='view-all-button'><button onClick={() => setSelectedTopic('All')} disabled={selectedTopic===''} className='violet-background text-white sora-font view-all'>View all FAQs</button></div>
    </div>
  )
}

export default Questions