import { Column } from 'react-table';

export const memberColumns: readonly Column<object>[] = [
  {
    Header: '이메일',
    accessor: 'email',
  },
  {
    Header: '이름',
    accessor: 'name',
  },
  {
    Header: '프로필사진',
    accessor: 'profileImg',
    Cell: ({ value }: { value: string }) => (
      <img src={value} alt="프로필 사진" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
    ),
  },
  {
    Header: '닉네임',
    accessor: 'nickname',
  },
  {
    Header: '핸드폰번호',
    accessor: 'phoneNumber',
  },
  {
    Header: '가입소셜',
    accessor: 'provider',
  },
  {
    Header: '탈퇴여부',
    accessor: 'deleted',
    Cell: ({ value }: { value: boolean }) => <span>{value ? '탈퇴된 회원' : '-'}</span>,
  },
];
