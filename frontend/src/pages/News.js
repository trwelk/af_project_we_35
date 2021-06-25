import React from 'react';
import NewsList from '../components/news/NewsList';
import UserTable from '../components/user/UserTable'
import Heading1 from '../components/views/util/Heading1';
import ParagraphWithBackground from '../components/views/util/ParagraphWithBackground';
function News() {

  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <div style={{background:"#fff5f8"}}>
        <Heading1 data={{heading:"Stay Updated"}} />
        <ParagraphWithBackground text={paragraph}/>
        <NewsList/>
      </div>
  );
}

export default News;
