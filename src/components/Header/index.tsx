import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import * as I from '../../assets/icon';
import * as Img from '../../assets/image';

const HeaderWrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const LogoAndSearch = styled.div`
  display: flex;
`;

const LogoDiv = styled.div`
  width: 3.5rem;

  img {
    width: 100%;
  }
`;

const SearchDiv = styled.div`
  width: 16rem;
  border: 1px solid black;
  display: flex;
  background-color: rgb(240, 242, 245);
  border: none;
  padding: 0.75rem;
  border-radius: 50px;
  align-items: center;

  @media (max-width: 1200px) {
    width: 3rem;
  }

  input {
    outline: none;
    background-color: rgb(240, 242, 245);
    border: none;
    margin-left: 0.5rem;

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const NavHeader = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

const ItemNavHeader = styled.div<{ name: string; param?: boolean }>`
  cursor: pointer;
  width: 7rem;
  height: ${(props) => (props.param ? '3.75rem' : '3rem')};
  margin-top: ${(props) => (props.param ? '0' : '0.5rem')};
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: ${(props) => (props.param ? '0' : '8px')};
  position: relative;
  border-bottom: ${(props) =>
    props.param ? '3px solid rgb(27, 116, 228)' : 'none'};

  &:hover {
    background-color: ${(props) => !props.param && 'rgb(240, 242, 245)'};
  }

  &::after {
    content: ${(props) => (props.name ? `"${props.name}"` : '')};
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: absolute;
    font-size: 0.8rem;
    padding: 0.5rem;
    top: 3rem;
    left: 25%;
    white-space: nowrap;
    border-radius: 8px;
    z-index: 99999;
    visibility: hidden;
  }

  &:hover::after {
    opacity: 1;
    transition: all 0.1s ease 0.25s;
    visibility: visible;
  }
`;

const NavInfo = styled.div`
  display: flex;
  width: 25vw;
  justify-content: center;
  margin-right: 0;

  @media (max-width: 767px) {
    margin-right: 3rem;
  }
`;

const ProfileNav = styled.div`
  width: 5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: 600;

  @media (max-width: 1200px) {
    display: none;
  }

  &:hover {
    background-color: rgb(228, 230, 245);
  }

  img {
    width: 2rem;
    border-radius: 50%;
    margin-right: 2px;
  }
`;

const ItemNavInfo = styled.div<{ name: string }>`
  background-color: rgb(228, 230, 235);
  border-radius: 50%;
  padding: 0.5rem 0.7rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 0.5rem;
  position: relative;

  div {
    position: absolute;
    background-color: rgb(228, 30, 63);
    color: white;
    border-radius: 50%;
    width: 1.1rem;
    height: 1.1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: rgb(206, 206, 212);
  }

  &::after {
    content: ${(props) => (props.name ? `"${props.name}"` : '')};
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: absolute;
    font-size: 0.8rem;
    padding: 0.5rem;
    top: 3rem;
    left: 25%;
    white-space: nowrap;
    border-radius: 8px;
    z-index: 99999;
    visibility: hidden;
  }

  &:hover::after {
    opacity: 1;
    transition: all 0.1s ease 0.25s;
    visibility: visible;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <LogoAndSearch>
        <LogoDiv>
          <img src={Img.LogoFacebook} alt="" />
        </LogoDiv>
        <SearchDiv>
          <I.SearchIcon /> <input type="text" placeholder="Cari di Facebook" />
        </SearchDiv>
      </LogoAndSearch>
      <NavHeader>
        <ItemNavHeader
          name="Beranda"
          param={location.pathname === '/' ? true : false}
        >
          <I.HomeIcon
            color={location.pathname === '/' ? 'rgb(27,116,228)' : ''}
          />
        </ItemNavHeader>
        <ItemNavHeader name="Watch">
          <I.WatchIcon />
        </ItemNavHeader>
        <ItemNavHeader name="Marketplace">
          <I.MarketIcon />
        </ItemNavHeader>
        <ItemNavHeader name="Grup">
          <I.GroupIcon />
        </ItemNavHeader>
        <ItemNavHeader name="Game">
          <I.GameIcon />
        </ItemNavHeader>
      </NavHeader>
      <NavInfo>
        <ProfileNav>
          <img src={Img.AsrulKadir} alt="asrulkadir" /> Asrul
        </ProfileNav>
        <ItemNavInfo name="Menu">
          <I.MenuIcon />
        </ItemNavInfo>
        <ItemNavInfo name="Messenger">
          <I.MessageIcon /> <div>3</div>
        </ItemNavInfo>
        <ItemNavInfo name="Notifikasi">
          <I.NotifIcon /> <div>5</div>
        </ItemNavInfo>
        <ItemNavInfo name="Akun">
          <I.ArrowBottom />
        </ItemNavInfo>
      </NavInfo>
    </HeaderWrapper>
  );
};

export default Header;
