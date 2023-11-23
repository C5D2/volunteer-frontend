export type PosterList =
  | {
      data: {
        posterList: {
          userId: number;
          posterId: number;
          posterTitle: string;
          posterContent: string;
          posterAuthor: string;
          heartCount: number;
          posterImgPath: string;
          profileImg: string;
          posterCreatedAt: string;
          posterUpdatedAt: string;
        }[];
      };
    }
  | undefined;

export interface PaginationDto {
  totalPages: number;
  totalElements: number;
  pageNo: number;
  lastPage: boolean;
}

export interface postData {
  posterList: PosterList[];
  paginationDto: PaginationDto;
}

export interface Response {
  status: string;
  message: string;
  data: postData;
}
