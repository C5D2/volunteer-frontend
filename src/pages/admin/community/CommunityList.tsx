import React, { useState } from 'react';
import { usePagination, useTable } from 'react-table';
import styled from 'styled-components';
import { communityColumns } from './communityColumns';
import Select from '@components/ui/Select/Select';
import { useQuery } from 'react-query';
import { Community, Data } from '@interfaces/Community';
import { getCommunityData } from '@apis/community/community';
import CommunitySearch from './CommunitySearch';
import { searchCommunity } from '@apis/admin';

export const CommunityList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [searchTitle, setSearchTitle] = useState<string>('');
  const [searchAuthor, setSearchAuthor] = useState<string>('');

  const { data: fetchedData, error } = useQuery<Data, Error>(
    ['communityData', { searchType, searchTitle, searchAuthor }],
    ({ queryKey }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, { searchType, searchTitle, searchAuthor }] = queryKey as [
        string,
        { searchType: string; searchTitle: string; searchAuthor: string }
      ];

      if (searchType) {
        return searchCommunity(searchType, searchType === 'title' ? searchTitle : searchAuthor);
      } else {
        return getCommunityData();
      }
    },
    {
      keepPreviousData: true,
    }
  );

  const transformedData = React.useMemo(() => {
    if (fetchedData && fetchedData.data && fetchedData.data.communityList) {
      return fetchedData.data.communityList.map((item: any) => ({
        ...item,
        createdAt: new Date(item.communityCreatedAt),
        updatedAt: new Date(item.communityUpdatedAt),
      })) as Community[];
    }
    console.log(fetchedData);
    return [];
  }, [fetchedData]);

  const filteredData = React.useMemo(() => {
    if (selectedCategory === '전체') {
      return transformedData;
    }
    return transformedData.filter((item) => item.categoryType === selectedCategory);
  }, [selectedCategory, transformedData]);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageCount, gotoPage } = useTable(
    {
      columns: communityColumns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const [pageRangeStartIndex, setPageRangeStartIndex] = useState(0);

  function movePageGroup(dir: 'prev' | 'next'): void {
    if (dir === 'prev' && pageRangeStartIndex >= 5) {
      setPageRangeStartIndex(pageRangeStartIndex - 5);
    } else if (dir === 'next' && pageRangeStartIndex < pageCount - 5) {
      setPageRangeStartIndex(pageRangeStartIndex + 5);
    }
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (searchTerms: any) => {
    setSearchType(searchTerms.condition);
    setSearchTitle(searchTerms.title);
    setSearchAuthor(searchTerms.author);
  };

  return (
    <>
      <SelectStyle>
        <CommunitySearch onSubmit={handleSearch} />
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="전체">전체</option>
          <option value="오프라인 캠페인">오프라인 캠페인</option>
          <option value="온라인 캠페인">온라인 캠페인</option>
          <option value="전시">전시</option>
          <option value="DIY 프로젝트">DIY 프로젝트</option>
        </Select>
      </SelectStyle>
      <ProductTableStyle>
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
        <PaginationWrap>
          <TableButton onClick={() => movePageGroup('prev')} disabled={pageRangeStartIndex === 0}>
            {'<'}
          </TableButton>
          {[...Array(Math.min(5, pageCount - pageRangeStartIndex))].map((_, i) => (
            <TableButton key={i} onClick={() => gotoPage(pageRangeStartIndex + i)}>
              {pageRangeStartIndex + i + 1}
            </TableButton>
          ))}
          <TableButton onClick={() => movePageGroup('next')} disabled={pageRangeStartIndex >= pageCount - 5}>
            {'>'}
          </TableButton>
        </PaginationWrap>
        {error && <div>Error: {error.message}</div>}
      </ProductTableStyle>
    </>
  );
};

// 삭제 예정
const SelectStyle = styled.div`
  padding: 1rem 0 2rem 2.5rem;
`;

const ProductTableStyle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
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

const PaginationWrap = styled.div`
  padding: 30px;
`;

const TableButton = styled.button`
  background: #919191;
  color: #fff;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;
