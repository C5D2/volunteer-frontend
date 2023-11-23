import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryListWrap = styled.div`
  width: 1500px;
  margin: 0 auto;
  padding: 100px 0 50px 0;
`;
const CategoryListBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
`;

const CategoryItem = styled.li`
  width: 24%;
  padding: 0 20px 50px 20px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  width: 100%;
  border: 1px solid #e1e2e3;
  display: block;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 7px 10px 1px #d2d2d2;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 200px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  box-sizing: border-box;
`;

const CategoryDataBox = styled.div`
  width: 50%;
`;
const CategoryTitle = styled.h5`
  display: inline-block;
  font-family: 'NotoSans-Bold';
  font-size: 18px;
  font-weight: bold;
  background: #56c9b6;
  color: #fff;
  border-radius: 30px;
  text-align: center;
  padding: 5px 10px;
  box-sizing: border-box;
`;
const CommunityTitle = styled.span`
  font-family: 'NotoSans-Bold';
  font-size: 18px;
  font-weight: bold;
  display: block;
  padding: 10px 0 0 5px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CommunityDescription = styled.span`
  width: 100%;
  font-family: 'NotoSans-Medium';
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0 0 5px;
  color: #464646;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CategoryJoinBox = styled.div`
  width: 50%;
  padding: 25px 0 0 0;
  position: relative;
`;
const IsJoined = styled.span`
  width: 100%;
  display: block;
  text-align: right;
  position: absolute;
  top: 0;
`;

const IsJoinedText = styled.i`
  display: inline-block;
  font-family: 'NotoSans-Regular';
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  background: #587cd8;
  color: #fff;
  border-radius: 30px;
  text-align: center;
  padding: 3px 5px;
  box-sizing: border-box;
  width: 100px;
`;

const CommunityJoinCount = styled.span`
  display: block;
  font-family: 'NotoSans-Regular';
  font-size: 15px;
  font-weight: 400;
  color: #afafaf;
  text-align: right;
  padding: 25px 5px 0 0px;
`;
const HostName = styled.span`
  display: block;
  font-family: 'NotoSans-Regular';
  font-size: 15px;
  font-weight: 400;
  color: #afafaf;
  text-align: right;
  padding: 5px 5px 0 0px;
`;

const MoreBtnWrap = styled.span`
  display: block;
  width: 96%;
`;

const MoreBtn = styled.button`
  font-family: 'NotoSans-Medium';
  width: 200px;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #56c9b6;
  margin-top: 30px;
  border: solid 1px #56c9b6;
  border-radius: 10px;
  padding: 7px 40px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  &:hover {
    background: #56c9b6;
    color: #fff;
  }
`;

export {
  CategoryListWrap,
  FlexBox,
  CategoryListBox,
  CategoryItem,
  StyledLink,
  ImgBox,
  Img,
  CategoryDataBox,
  CategoryTitle,
  CommunityTitle,
  CommunityDescription,
  CategoryJoinBox,
  IsJoined,
  IsJoinedText,
  CommunityJoinCount,
  HostName,
  MoreBtnWrap,
  MoreBtn,
};
