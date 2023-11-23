import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveIndex } from '@stores/slices/NavCatrgorySlice.ts';
import { useQuery } from 'react-query';
import { getCommunityData } from '@apis/community/community.ts';
import * as S from '@pages/home/styles/CategoryListStyle';
import { Community, QueryData } from '@interfaces/Community.ts';
import CategorySearch from '@pages/home/CategorySearch.tsx';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';

const CategoryList = () => {
  const { data: fetchedData, isLoading, error } = useQuery<QueryData, Error>('communityData', getCommunityData);

  console.log(fetchedData);

  const activeIndex = useSelector(selectActiveIndex);

  const fetchedCommunityData = fetchedData?.data.communityList || [];

  // searched 상태와 해당 상태를 변경할 함수 설정
  const [searched, setSearched] = useState(false);

  const [searchField, setSearchField] = useState('communityTitle');

  const handleSearch = (query: string, field: string) => {
    // 수정: handleSearch 함수
    setSearchQuery(query);
    setSearchField(field);
    setSearched(true);
  };

  useEffect(() => {
    // activeIndex가 변경될 때 검색 상태 초기화
    setSearchQuery('');
    setSearched(false); // 카테고리 검색 결과 텍스트 초기화
  }, [activeIndex]);

  const [itemsToShow, setItemsToShow] = useState(8); // 초기에 12개의 항목 표시
  const [searchQuery, setSearchQuery] = useState('');

  const loadMore = () => {
    setItemsToShow(itemsToShow + 4); // 4개씩 추가
    // 스크롤 이동
    scroll.scrollMore(500); // 현재 스크롤 위치에서 500px 아래로 스크롤
  };

  // 데이터 필터링
  const filteredData = fetchedCommunityData?.filter((community) => community.categoryId === activeIndex + 1);

  // 고정 데이터
  const defaultData = fetchedCommunityData || [];

  //검색 필터링
  const filteredDataToShow: Community[] =
    activeIndex >= 0
      ? (filteredData ? filteredData : defaultData).filter(
          (community) =>
            typeof searchQuery === 'string' && community[searchField].toLowerCase().includes(searchQuery.toLowerCase())
        )
      : defaultData.filter(
          (community) =>
            typeof searchQuery === 'string' && community[searchField].toLowerCase().includes(searchQuery.toLowerCase())
        );

  // 사용할 데이터
  const dataToUse: Community[] | undefined = filteredDataToShow.slice(0, itemsToShow);

  // 모든 데이터가 로드되었는지 여부를 확인
  const allDataLoaded =
    dataToUse &&
    dataToUse.length === (activeIndex >= 0 ? (filteredData ? filteredData.length : 0) : defaultData.length);

  console.log(fetchedCommunityData);
  console.log(activeIndex);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: 에러발생</div>;
  }

  return (
    <S.CategoryListWrap>
      <CategorySearch
        onSearch={handleSearch}
        filteredData={filteredDataToShow}
        searched={searched}
        setSearched={setSearched}
      />
      <S.CategoryListBox>
        {dataToUse &&
          dataToUse.map((community) => (
            <S.CategoryItem key={community.communityId} data-aos="fade-up">
              <S.StyledLink to={`/community/${community.communityId}`}>
                <S.ImgBox>
                  <S.Img src={community.communityMainImgPath} />
                </S.ImgBox>

                <S.FlexBox>
                  <S.CategoryDataBox>
                    <S.CategoryTitle>{community.categoryType}</S.CategoryTitle>
                    <S.CommunityTitle>{community.communityTitle}</S.CommunityTitle>
                    <S.CommunityDescription>{community.communityContent}</S.CommunityDescription>
                  </S.CategoryDataBox>

                  <S.CategoryJoinBox>
                    {community.communityMaxParticipant === 10 ? (
                      <S.IsJoined>
                        <S.IsJoinedText>참여완료</S.IsJoinedText>
                      </S.IsJoined>
                    ) : null}
                    <S.CommunityJoinCount>{community.communityMaxParticipant}</S.CommunityJoinCount>
                    <S.HostName>{community.communityAuthor}</S.HostName>
                  </S.CategoryJoinBox>
                </S.FlexBox>
              </S.StyledLink>
            </S.CategoryItem>
          ))}
      </S.CategoryListBox>

      <S.MoreBtnWrap>{allDataLoaded ? null : <S.MoreBtn onClick={loadMore}>더보기</S.MoreBtn>}</S.MoreBtnWrap>
    </S.CategoryListWrap>
  );
};

export default CategoryList;
