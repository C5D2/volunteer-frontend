import { Column } from 'react-table';
import Images from './Images';

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
      <Images
        imageUrl={value}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        onLoad={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
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
    Cell: ({ value }: { value: boolean }) => <span>{value ? '탈퇴 회원' : '-'}</span>,
  },
];
