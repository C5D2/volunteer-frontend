import { useState } from 'react';
import styled from 'styled-components';

interface SearchProps {
  onSubmit: (data: { condition: string; title: string; author: string }) => void;
}

function CommunitySearch({ onSubmit }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCondition, setSearchCondition] = useState('title');

  const handleSearch = () => {
    onSubmit({ condition: searchCondition, title: searchTerm, author: searchTerm });
  };

  return (
    <AdminCommunityList>
      <Select value={searchCondition} onChange={(e) => setSearchCondition(e.target.value)}>
        <option value="title">제목</option>
        <option value="author">작성자</option>
      </Select>
      <InputTypeSearch
        type="text"
        placeholder={searchCondition === 'title' ? '검색할 제목을 입력하세요.' : '검색할 작성자를 입력하세요.'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AdminButton className="admin" onClick={handleSearch}>
        검색
      </AdminButton>
    </AdminCommunityList>
  );
}

export default CommunitySearch;

export const AdminButton = styled.div`
  background-color: #00c09e;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 5px;
  display: inline-block;
`;

const InputTypeSearch = styled.input`
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  margin-left: 5px;
`;

const Select = styled.select`
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;

const AdminCommunityList = styled.div`
  display: flex;
  justify-content: center;
`;
