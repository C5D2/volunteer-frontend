import styled from 'styled-components';
import searchBtn from '@assets/images/searchBtn.png';

const SearchBox = styled.div`
  width: 96%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  flex-flow: wrap;
  box-sizing: border-box;
`;

const SelectFilter = styled.select`
  border: solid 1px #56c9b6;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 5px;
`;

const InputSearch = styled.input`
  width: 500px;
  border: solid 1px #56c9b6;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #fff;
  color: #333;
  &::placeholder {
    color: #333;
  }
`;

const SearchBtn = styled.button`
  padding: 10px 35px;
  box-sizing: border-box;
  background: url(${searchBtn}) no-repeat center #56c9b6;
  background-size: 35px;
  border-radius: 5px;
  margin-left: 5px;
  text-indent: -9999px;
`;

const SearchTextResult = styled.span`
  width: 100%;
  font-size: 20px;
  color: #6c6a6a;
  display: block;
  text-align: center;
  padding: 20px 0 0 0;
`;

const DataLength = styled.span`
  font-size: 25px;
  color: #56c9b6;
`;

export { SearchBox, SelectFilter, InputSearch, SearchBtn, SearchTextResult, DataLength };
