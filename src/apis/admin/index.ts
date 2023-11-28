import { axiosImgInstance } from '@apis/axiosInstance/axiosInstance';

export interface UserList {
  email: string;
  name: string;
  profileImag: string;
  nickname: string;
  phoneNumber: string;
  provider: string;
  deleted: boolean;
}

// 전체 회원 목록 불러오기, 페이지네이션 적용은 추후 수정 예정
export const getAllUser = async (): Promise<UserList[]> => {
  let pageNo = 1;
  let userList: any[] | PromiseLike<UserList[]> = [];
  let lastPage = false;

  do {
    const response = await axiosImgInstance.get(`admin/allUser`, {
      params: {
        page: pageNo,
      },
    });

    userList = userList.concat(response.data.data.userList);
    lastPage = response.data.data.paginationDto.lastPage;

    pageNo++;
  } while (!lastPage);

  return userList;
};

export const searchCommunity = async (type: string, keyword: string): Promise<any> => {
  return axiosImgInstance
    .get(`community/search/${type}`, {
      params: {
        keyword: keyword,
      },
    })
    .then((response) => response.data);
};
