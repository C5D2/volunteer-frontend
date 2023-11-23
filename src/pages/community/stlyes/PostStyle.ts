import styled from 'styled-components';
import PostListOptionBtn from '@assets/images/PostListOptionBtn.png';
import HeartIco from '@assets/images/HeartIco.png';
import CommentIco from '@assets/images/CommentIco.png';

const PostListWrap = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`;

const PostListCenterWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 40px 40px;
  box-sizing: border-box;
`;

const PostUserBox = styled.div`
  width: 100%;
  background-color: #333;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
`;

const UserProfileBox = styled.div`
  width: 250px;
`;

const UserProfileImg = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 100%;
`;

const UserProfileName = styled.span`
  width: 100%;
  display: block;
  text-align: center;
  padding: 20px 0 0 0;
  color: #fff;
  font-size: 20px;
`;

const PostCommunityTitle = styled.h5`
  position: absolute;
  width: 100%;
  display: block;
  top: 42%;
  left: 45%;
  transform: translate(0%, 00%);
  color: #fff;
  font-size: 30px;
`;

const PostWriteBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const PostWriteBtn = styled.button`
  padding: 10px 50px;
  background-color: #56c9b6;
  color: #fff;
  text-align: center;
  border-radius: 30px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
`;

const PostListBox = styled.div`
  width: 100%;
  margin: 50px 0 0px 0;
  padding: 0px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 2px 9px #adadad;
`;

const PostTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 40px 50px 40px;
  box-sizing: border-box;
`;

const UserTitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PostListUserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const PostListNameBox = styled.div`
  padding: 35px 0 0 40px;
  box-sizing: border-box;
`;

const PostListNickname = styled.span`
  display: block;
  font-size: 14px;
`;

const PostListTitle = styled.span`
  display: block;
  padding: 20px 0 0 0;
  font-size: 20px;
`;

const PostListDateBox = styled.div``;

const OptionBtnBox = styled.div`
  position: relative;
`;

const OptionBtn = styled.button`
  width: 100%;
  height: 9px;
  background: url(${PostListOptionBtn}) no-repeat 100% 100%;
  background-size: 50px;
  z-index: 9999;
  position: relative;
`;

const ToggleBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  right: -8px;
  background-color: #fff;
  border-radius: 10px;
  border: solid 1px #e1e1e1;
`;

const ModifyBtn = styled.span`
  font-size: 16px;
  display: block;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: solid 1px #e1e1e1;
  &:hover {
    background-color: #56c9b6;
    border-radius: 10px 10px 0 0;
    color: #fff;
  }
`;

const DeleteBtn = styled.button`
  font-size: 16px;
  display: block;
  padding: 10px 20px;
  box-sizing: border-box;
  &:hover {
    background-color: #c75368;
    border-radius: 0 0 10px 10px;
    color: #fff;
  }
`;

const PostListDate = styled.div`
  padding: 15px 0 0 0;
`;

const PostListDateTitle = styled.span`
  display: inline-block;
  padding: 10px 10px 0 0;
  box-sizing: border-box;
`;

const PostListDateContent = styled.span``;

const PostContentBox = styled.div`
  width: 100%;
`;

const PostListContentImg = styled.img`
  width: 100%;
`;

const PostContentText = styled.p`
  padding: 40px;
  box-sizing: border-box;
`;

const PostLikeCommentBox = styled.div`
  width: 100%;
  border-top: solid 1px #e1e1e1;
  padding: 20px 40px 60px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
`;

const LikeBox = styled.div``;

const Like = styled.span`
  font-family: 'BMDOHYEON';
  font-size: 20px;
  padding: 3px 80px 0 50px;
  box-sizing: border-box;
  display: block;
  position: relative;
  &::before {
    content: '';
    width: 35px;
    height: 33px;
    background: url(${HeartIco}) no-repeat 100% 100%;
    background-size: 35px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const LikeCount = styled.i`
  padding: 5px 10px 5px 10px;
  font-style: normal;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  background-color: #56c9b6;
  border-radius: 7px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
`;

const CommentBox = styled.div``;

const Comment = styled.span`
  font-family: 'BMDOHYEON';
  font-size: 20px;
  padding: 3px 0 0 50px;
  box-sizing: border-box;
  display: block;
  position: relative;
  &::before {
    content: '';
    width: 35px;
    height: 35px;
    background: url(${CommentIco}) no-repeat 100% 100%;
    background-size: 35px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const CommentCount = styled.i`
  padding: 5px 10px 5px 10px;
  font-style: normal;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  background-color: #56c9b6;
  border-radius: 7px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
`;

const NoContent = styled.div`
  background: #fff;
  padding: 40px;
  box-sizing: border-box;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 2px 9px #adadad;
  margin-top: 20px;
`;

export {
  PostListWrap,
  PostListCenterWrap,
  PostUserBox,
  UserProfileBox,
  UserProfileImg,
  UserProfileName,
  PostCommunityTitle,
  PostWriteBtnWrap,
  PostWriteBtn,
  PostListBox,
  PostTitleBox,
  UserTitleBox,
  PostListUserImg,
  PostListNameBox,
  PostListNickname,
  PostListTitle,
  PostListDateBox,
  OptionBtnBox,
  OptionBtn,
  ToggleBox,
  ModifyBtn,
  DeleteBtn,
  PostListDate,
  PostListDateTitle,
  PostListDateContent,
  PostContentBox,
  PostListContentImg,
  PostContentText,
  PostLikeCommentBox,
  LikeBox,
  Like,
  CommentBox,
  Comment,
  LikeCount,
  CommentCount,
  NoContent,
};
