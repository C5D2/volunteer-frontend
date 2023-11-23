// CategorySearch.tsx

import React, { useEffect, useState } from 'react';
import { Community } from '@interfaces/Community.ts';
import * as S from '@pages/home/styles/CategorySearchStyle.ts';

interface CategorySearchProps {
  onSearch: (query: string, field: string) => void;
  filteredData: Community[];
  searched: boolean; // 추가: searched 상태를 받아올 prop
  setSearched: (value: boolean) => void;
}

const CategorySearch: React.FC<CategorySearchProps> = ({ onSearch, filteredData, searched, setSearched }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('communityTitle');

  // 리렌더링시 검색어 초기화
  useEffect(() => {
    if (!searched) {
      setSearchQuery('');
    }
  }, [searched]);

  const handleSearch = () => {
    onSearch(searchQuery, searchField);
    setSearched(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <S.SearchBox>
      <S.SelectFilter value={searchField} onChange={(e) => setSearchField(e.target.value)}>
        {' '}
        <option value="communityTitle">제목</option>
        <option value="communityAuthor">작성자</option>
      </S.SelectFilter>

      <S.InputSearch
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <S.SearchBtn onClick={handleSearch}>검색</S.SearchBtn>
      {searched && ( // 검색 결과 메시지를 표시할 때에는 searched 상태를 확인
        <S.SearchTextResult>
          카테고리 검색 결과 <S.DataLength>{filteredData.length}</S.DataLength>개가 검색되었습니다.
        </S.SearchTextResult>
      )}
    </S.SearchBox>
  );
};

export default CategorySearch;
