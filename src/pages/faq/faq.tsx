import React from 'react';
import Questions from '../../components/faq/questions';
// import search from "../../assets/search.png";

const Faq = () => {
  
  const [searchValue, setSearchValue] = React.useState("");
  const [ searchData, setSearchData] = React.useState([]); // Questions

  const handleSearch = (e:any) => {
    setSearchValue(e.target.value);
    // setSearchData(searchData?.filter((item) => item?.question?.toLowerCase()?.indexOf(e.target.value.toLowerCase()) >=0))
    setSearchData(
      searchData.filter((item:any) =>
        item?.question?.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Questions />
  )
}

export default Faq