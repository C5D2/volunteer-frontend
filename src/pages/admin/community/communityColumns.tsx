import { Column } from 'react-table';

// type Data = {
//   communityId: number;
//   categoryType: string;
//   communityTitle: string;
//   communityParticipant: number;
//   communityMaxParticipant: number;
//   communityAuthor: string;
//   communityStatus: string;
//   communityContent: string;
//   communityLocation: string;
//   communityMainImgPath: string;
//   communityCreatedAt: Date;
//   communityUpdatedAt: Date;
// };

export const communityColumns: Column<object>[] = [
  {
    Header: '번호',
    accessor: 'communityId',
  },
  {
    Header: '카테고리',
    accessor: 'categoryType',
  },
  {
    Header: '커뮤니티제목',
    accessor: 'communityTitle',
  },
  {
    Header: '커뮤니티참여인원',
    accessor: 'communityParticipant',
  },
  {
    Header: '커뮤니티모집인원',
    accessor: 'communityMaxParticipant',
  },
  {
    Header: '커뮤니티작성자',
    accessor: 'communityAuthor',
  },
  {
    Header: '커뮤니티활동상태',
    accessor: 'communityStatus',
  },
  {
    Header: '커뮤니티내용',
    accessor: 'communityContent',
  },
  {
    Header: '커뮤니티활동장소',
    accessor: 'communityLocation',
  },
  {
    Header: '커뮤니티이미지',
    accessor: 'communityMainImgPath',
    Cell: ({ value }: { value: string }) => (
      <img src={value} alt="커뮤니티 사진" style={{ width: '100px', height: '100px' }} />
    ),
  },
  {
    Header: '커뮤니티생성시간',
    accessor: 'communityCreatedAt',
    Cell: ({ value }) => value.toLocaleString(),
  },
  {
    Header: '커뮤니티수정시간',
    accessor: 'communityUpdatedAt',
    Cell: ({ value }) => value.toLocaleString(),
  },
];
