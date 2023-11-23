// import { FormEvent } from 'react';

// interface SearchProps {
//   onSubmit: (filter: string) => void;
// }

// function TableSearch({ onSubmit }: SearchProps) {
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const filterInput = event.currentTarget.elements.namedItem('filter') as HTMLInputElement;
//     if (filterInput) {
//       const filterValue = filterInput.value;
//       onSubmit(filterValue);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="filter" />
//       <button type="submit">Search</button>
//     </form>
//   );
// }
// 서버에서 조회 시 검색 코드
import { useState } from 'react';
import { AdminButton } from '../community/CommunitySearch';
import styled from 'styled-components';

interface TableSearchProps {
  onSubmit: (value: string) => void;
}

function TableSearch({ onSubmit }: TableSearchProps) {
  const [searchNickname, setSearchNickname] = useState('');

  const handleSearch = () => {
    // 검색어가 입력되었을 때, 부모 컴포넌트로 검색어를 전달합니다.
    onSubmit(searchNickname);
  };

  return (
    <AdminSearchWrap>
      <input
        type="text"
        placeholder="검색할 닉네임을 입력하세요."
        value={searchNickname}
        onChange={(e) => setSearchNickname(e.target.value)}
      />
      <AdminButton className="admin" onClick={handleSearch}>
        검색
      </AdminButton>
    </AdminSearchWrap>
  );
}

export default TableSearch;

const AdminSearchWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
  input[type='text'] {
    border: solid 1px #e1e1e1;
    padding: 0px 20px;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;
