import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowBottom, ArrowUp } from '../../assets/icon';
import * as img from '../../assets/image';
import { sideNavList } from '../../utils/sideNavList';

const SideNavWrapper = styled.div<{ scroll: boolean }>`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 22.5vw;
  height: 90vh;
  padding: 1rem;
  overflow-y: ${(props) => (props.scroll ? 'auto' : 'hidden')};

  @media (max-width: 767px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;

    &-track {
      background-color: #f5f5f5;
    }

    &-thumb {
      background-color: rgb(188, 192, 196);
      border-radius: 0.5rem;
    }
  }
`;

const ProfileNav = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
  padding: 0.25rem;
  border-radius: 5px;

  &:hover {
    background-color: rgb(228, 230, 233);
  }

  img {
    width: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const ItemSideNav = styled.div`
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.25rem;
  border-radius: 5px;

  &:hover {
    background-color: rgb(228, 230, 233);
  }

  img {
    margin-right: 0.8rem;
  }
`;

const ShowMore = styled.div`
  cursor: pointer;
  font-weight: 600;
  padding: 0.25rem;
  border-radius: 5px;
  height: 3rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgb(228, 230, 233);
  }

  span {
    background-color: rgb(210, 212, 216);
    border-radius: 50%;
    padding: 0.4rem 0.5rem;
    height: 2rem;
    margin-right: 1rem;
  }
`;

const SideNav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <SideNavWrapper
      onMouseOver={() => setIsScroll(true)}
      onMouseLeave={() => setIsScroll(false)}
      scroll={isScroll}
    >
      <ProfileNav>
        <img src={img.AsrulKadir} alt="asrulkadir" /> Asrul Kadir
      </ProfileNav>
      {isShowMore ? (
        sideNavList.map((item, id) => {
          return (
            <ItemSideNav key={id}>
              <img src={item.image} alt={item.name} />
              {item.name}
            </ItemSideNav>
          );
        })
      ) : (
        <>
          <ItemSideNav>
            <img src={img.Friend} alt="friend" /> Teman
          </ItemSideNav>
          <ItemSideNav>
            <img src={img.Marketplace} alt="marketplace" /> Marketplace
          </ItemSideNav>
          <ItemSideNav>
            <img src={img.Page} alt="page" /> Halaman
          </ItemSideNav>
          <ItemSideNav>
            <img src={img.Group} alt="group" /> Grup
          </ItemSideNav>
          <ItemSideNav>
            <img src={img.Watch} alt="watch" /> Watch
          </ItemSideNav>
        </>
      )}
      <ShowMore onClick={() => setIsShowMore(!isShowMore)}>
        <span>{isShowMore ? <ArrowUp /> : <ArrowBottom />}</span>{' '}
        {isShowMore ? 'Sembunyikan' : 'Lihat Lebih Banyak'}
      </ShowMore>
    </SideNavWrapper>
  );
};

export default SideNav;
