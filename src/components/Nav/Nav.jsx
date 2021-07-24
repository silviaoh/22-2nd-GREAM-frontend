import React from 'react';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavBox>
      <UpperNav>
        <GoToCS>고객센터</GoToCS>
        <GoToCart>관심상품</GoToCart>
        <GoToMyPage>마이페이지</GoToMyPage>
        <Login>로그인</Login>
      </UpperNav>
      <BottomNav>
        <div>GREAM</div>
        <div></div>
        <LeftMenuBox>
          <GoToStyle>STYLE</GoToStyle>
          <GoToShop>SHOP</GoToShop>
          <GoToAbout>ABOUT</GoToAbout>
          <Search>
            <i class="fas fa-search"></i>
          </Search>
        </LeftMenuBox>
      </BottomNav>
    </NavBox>
  );
}

const NavBox = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;
const UpperNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 65px;
  height: 30px;
  background-color: white;
`;

const GoToCS = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 11px;
`;

const GoToCart = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 11px;
`;

const GoToMyPage = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 11px;
  :hover {
    cursor: pointer;
  }
`;

const Login = styled.div`
  margin-left: 10px;
  font-size: 11px;
  :hover {
    cursor: pointer;
  }
`;

const BottomNav = styled.div`
  display: ${({ theme }) => theme.setFlex('center', 'center')};
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
  height: 68px;
  background-color: white;
  border-bottom: solid;
  border-top: solid;
  border-width: 1px;
  border-bottom-color: ${({ theme }) => theme.subFontColor};
  border-top-color: ${({ theme }) => theme.subFontColor};
`;

const LeftMenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoToStyle = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const GoToShop = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;

const GoToAbout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const Search = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
