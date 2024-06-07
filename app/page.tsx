"use client";

import { useState } from 'react';
import {columns, tags} from '@/data/data'
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/Back2Top';
import Card from '@/components/Card';
import Header from '@/components/Header'

const Page = () => {
  const [selectedTag, setSelectedTag] = useState('全部');
  const [inputValue, setInputValue] = useState<string>('');

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value); // 输出当前输入框的值
  };

  const tagMatchResult = selectedTag === '全部' ? columns : columns.filter(item => item.type.includes(selectedTag));

  const filteredData = tagMatchResult.filter(item => {
    if (inputValue) {
      const titleMatchResult = item.title.includes(inputValue) || item.description.includes(inputValue) || item.owner.includes(inputValue)
      return titleMatchResult
    }
    return tagMatchResult;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">

        <div className="text-center font-bold text-red-600 text-xl pt-6">
          <input type="text" placeholder="搜索小报童精选专栏（可输入专栏名称、作者、内容方向等）" className="mt-4 p-2 border rounded w-1/2" value={inputValue} onChange={handlerSearch}/>
        </div>

        <nav className="flex flex-wrap justify-center space-x-2 space-y-2 py-4 w-3/5 mx-auto my-2">
          {tags.map(tag => (
            <button 
              key={tag} 
              onClick={() => setSelectedTag(tag)} 
              className={`px-4 py-2 rounded border ${selectedTag === tag ? 'bg-gray-300 text-white' : 'bg-white text-red-500 border-dashed border-red-500'}`}
            >
              {tag}
            </button>
          ))}
        </nav>

        <div className="text-center font-bold text-red-800 text-xl mt-2">
          <p>【{selectedTag}】 共有 {filteredData.length} 个专栏</p>
        </div>

        <main className="flex flex-wrap justify-center p-12 my-0 mx-auto">
          {filteredData.map(item => (
            <Card cloumn_info={item} />
          ))}
        </main>        
      </div>
      <Faq />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Page;