// community.ts
//메인 커뮤니티 리스트

export interface Community {
  [key: string]: any;
  categoryId: number;
  categoryType: string;
  communityTitle: string;
  communityParticipant: number;
  communityMaxParticipant: number;
  communityAuthor: string;
  communityStatus: string;
  communityContent: string;
  communityLocation: string;
  communityMainImgPath: string;
  communityCreatedAt: Date;
  communityUpdatedAt: Date;
}

export interface QueryData {
  data: {
    communityList: Community[];
  };
}

//메인 커뮤니티 상세
export interface CommunityUserDetail {
  communityAuthor: string;
  communityUserProfile: string;
}

export interface CommunityImgPath {
  communityImgNum: number;
  communityImgPath: string;
}

export interface CommunityDetail {
  communityId: number;
  communityTitle: string;
  communityParticipant: number;
  communityMaxParticipant: number;
  communityAuthor: string;
  communityStatus: string;
  communityContent: string;
  communityLocation: string;
  communityCreatedAt: string;
  communityUpdatedAt: string;
}

export interface Data {
  map: any;
  communityList: Data | undefined;
  data: Data | undefined;
  communityDetail: CommunityDetail;
  communityImgPathList: CommunityImgPath[];
}

export interface CommunityData {
  communityDetail: CommunityDetail;
  communityImgPathList: CommunityImgPath[];
}

export interface Response {
  status: string;
  message: string;
  data: CommunityData;
}

export interface QueryData {
  data: {
    communityList: Community[];
  };
}
