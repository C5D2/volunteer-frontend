import { useEffect, useState } from 'react';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import styled from 'styled-components';
import { memberColumns } from './memberColumns';
import TableSearch from './TableSearch';
import { getAllUser } from '@apis/admin';
import { UserList } from '@apis/admin';

// type UserList = {
//   email: string;
//   name: string;
//   profileImg: string;
//   nickname: string;
//   phoneNumber: string;
//   provider: string;
//   deleted: boolean;
// };

export const MemberList: React.FC = () => {
  const [data, setData] = useState<UserList[]>([]);
  const [, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUser();
        if (Array.isArray(response)) {
          setData(response as UserList[]); // 타입 단언을 사용하여 타입을 강제로 할당
        } else {
          console.error('Invalid data format:', response);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageCount, gotoPage, setGlobalFilter } =
    useTable(
      {
        columns: memberColumns,
        data: data,
        initialState: { pageIndex: currentPage, pageSize: 5 },
      },
      useGlobalFilter,
      usePagination
    );

  // 페이지네이션 버튼 범위 관리 상태
  const [pageRangeStartIndex, setPageRangeStartIndex] = useState(0);

  // 다음 or 이전 페이지 그룹(5페이지씩)으로 이동하는 함수
  function movePageGroup(dir: 'prev' | 'next'): void {
    if (dir === 'prev' && pageRangeStartIndex >= 5) {
      setPageRangeStartIndex(pageRangeStartIndex - 5);
      setCurrentPage(currentPage - 1); // 이전 페이지 그룹으로 이동할 경우 currentPage 값을 감소
    } else if (dir === 'next' && pageRangeStartIndex < pageCount - 5) {
      setPageRangeStartIndex(pageRangeStartIndex + 5);
      setCurrentPage(currentPage + 1); // 다음 페이지 그룹으로 이동할 경우 currentPage 값을 증가
    }
  }
  return (
    <>
      <ProductTableStyle>
        <TableSearch onSubmit={setGlobalFilter} />
        {/* <TableSearch onSubmit={handleSearch} /> */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 페이지네이션 */}
        <PaginationWrap>
          {/* 이전 페이지 그룹 버튼 */}
          <TableButton onClick={() => movePageGroup('prev')} disabled={pageRangeStartIndex === 0}>
            {'<'}
          </TableButton>

          {/* 페이징 숫자 목록, 최대 5개의 페이지 번호 생성, 마지막 페이지 그룹에서는 남은 페이지 수만큼만 버튼 생성 */}
          {[...Array(Math.min(5, pageCount - pageRangeStartIndex))].map((_, i) => (
            <TableButton key={i} onClick={() => gotoPage(pageRangeStartIndex + i)}>
              {pageRangeStartIndex + i + 1}
            </TableButton>
          ))}

          {/* 다음 페이지 그룹 버튼 */}
          <TableButton onClick={() => movePageGroup('next')} disabled={pageRangeStartIndex >= pageCount - 5}>
            {'>'}
          </TableButton>
        </PaginationWrap>
      </ProductTableStyle>
    </>
  );
};

const PaginationWrap = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const ProductTableStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 1200px;
  display: block;
  margin: 0 auto;
  table {
    border-collapse: collapse;
    width: 95%;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: rgb(0, 192, 158, 0.5);
  }
  th {
    background-color: #57c8b5;
    color: white;
    text-align: center;
  }
`;

const TableButton = styled.button`
  background: #919191;
  padding: 5px 10px;
  color: #fff;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
`;
