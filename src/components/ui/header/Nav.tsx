import styled from 'styled-components';
import { setActiveIndex, selectActiveIndex } from '@stores/slices/NavCatrgorySlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Nav = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector(selectActiveIndex);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 700);
  }, [activeIndex]);

  const handleMenuClick = (index: number) => {
    const matchCommunity = window.location.pathname.match(/\/community\/(\d+)/);
    const matchLogin = window.location.pathname.match(/\/login/);
    const matchSignup = window.location.pathname.match(/\/signup/);
    const matchSignupAdd = window.location.pathname.match(/\/signup\/add/);
    const matchMy = window.location.pathname.match(/\/my/);
    const matchMyEdit = window.location.pathname.match(/\/my\/edit/);
    const communityCreate = window.location.pathname.match(/\/community\/create/);
    const CommunityEdit = window.location.pathname.match(/\/community\/(\d+)\/edit/);
    const PostPage = window.location.pathname.match(/\/community\/(\d+)\/post/);
    const PostCreate = window.location.pathname.match(/\/community\/(\d+)\/post\/create/);
    const PostDetail = window.location.pathname.match(/\/community\/(\d+)\/post\/(\d+)/);
    const PostEdit = window.location.pathname.match(/\/community\/(\d+)\/post\/(\d+)\/edit/);
    const Admin = window.location.pathname.match(/\/admin/);
    const MemberList = window.location.pathname.match(/\/admin\/member/);
    const CommunitySearch = window.location.pathname.match(/\/admin\/community/);

    if (
      matchCommunity ||
      matchLogin ||
      matchSignup ||
      matchSignupAdd ||
      matchMy ||
      matchMyEdit ||
      communityCreate ||
      CommunityEdit ||
      PostPage ||
      PostCreate ||
      PostDetail ||
      PostEdit ||
      Admin ||
      MemberList ||
      CommunitySearch
    ) {
      dispatch(setActiveIndex(index));
      navigate(`/`);
      setTimeout(() => {
        window.scrollTo(0, 700);
      }, 100); // 100ms 후에 스크롤 위치 설정
    } else {
      dispatch(setActiveIndex(index));
      if (window.scrollY === 0) {
        window.scrollTo(0, 700);
      }
    }
  };

  return (
    <NavList>
      <List
        className={activeIndex === -1 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(-1);
        }}
      >
        전체보기
      </List>

      <List
        className={activeIndex === 0 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(0);
        }}
      >
        오프라인 캠페인
      </List>

      <List
        className={activeIndex === 1 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(1);
        }}
      >
        온라인 캠페인
      </List>

      <List
        className={activeIndex === 2 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(2);
        }}
      >
        전시
      </List>

      <List
        className={activeIndex === 3 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(3);
        }}
      >
        DIY 프로젝트
      </List>
    </NavList>
  );
};

export default Nav;

const NavList = styled.ul`
  width: 85%;
  display: flex;
  padding: 0px 0 0 30px;
`;

const List = styled.li`
  width: 17%;
  padding: 40px 0 0 0;
  cursor: pointer;
  text-align: center;
  position: relative;
  z-index: 1;
  font-size: 18px;

  &.active,
  &:hover {
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00c09e;
    transform-origin: top center;
    transform: scaleY(0);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  &.active::before,
  &:hover::before {
    transform: scaleY(1);
  }
`;
