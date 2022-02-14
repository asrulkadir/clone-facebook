import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowRight, PlusIcon } from '../../assets/icon';
import { AsrulKadir } from '../../assets/image';
import { IContact } from '../../types/contacts.type';
import UserServices from '../../api/user';

const StoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 90%;
  margin: auto;
  z-index: 1;
`;

const CreateStory = styled.div`
  background-color: #fff;
  width: 7rem;
  height: 12rem;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-right: 0.5rem;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }

  &:hover {
    img {
      transform: scale(1.05);
      transition: all 0.2s ease;
      opacity: 0.85;
    }
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 75%;
    object-fit: cover;
  }

  p {
    font-weight: 500;
    position: absolute;
    bottom: 0.4rem;
    left: 0.5rem;
  }

  &:hover {
    background-color: #e9e8e8;
  }
`;

const StoryUser = styled.div`
  width: 7rem;
  height: 12rem;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  margin-right: 0.5rem;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }

  &:hover {
    .image-story {
      transform: scale(1.05);
      transition: all 0.2s ease;
      opacity: 0.85;
    }
  }

  .image-story {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  p {
    position: absolute;
    bottom: 0.4rem;
    left: 0.5rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0);
  }
`;

const PlusIconWrapper = styled.div`
  background-color: rgb(24, 118, 242);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #fff;
  position: absolute;
  bottom: 1.75rem;
  left: 35%;

  @media (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
    bottom: 18%;
    left: 35%;
  }
`;

const ProfileWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0.5rem;
  left: 0.5rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 3px solid rgb(24, 118, 242);
  }
`;

const ArrowRightWrapper = styled.div<{ name: string }>`
  position: absolute;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  right: -1.25rem;
  top: 4.5rem;
  border-radius: 50%;
  border: 1px solid rgb(206, 207, 210);
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 242, 245);
  }

  &::after {
    content: ${(props) => (props.name ? `"${props.name}"` : '')};
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: absolute;
    font-size: 0.8rem;
    padding: 0.5rem;
    top: 3rem;
    left: -2rem;
    white-space: nowrap;
    border-radius: 8px;
    z-index: 99999;
    visibility: hidden;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover::after {
    opacity: 1;
    transition: all 0.1s ease 0.25s;
    visibility: visible;
  }
`;

const Stories = () => {
  const [storyUser, setStoryUser] = useState<IContact[]>([]);
  const [width, setWidth] = useState(window.innerWidth);

  const handleSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    UserServices.getUsers()
      .then((res) => {
        setStoryUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    window.addEventListener('resize', handleSizeChange);
  }, []);

  return (
    <StoriesWrapper>
      <CreateStory>
        <img src={AsrulKadir} alt="asrul" />
        <PlusIconWrapper>
          <PlusIcon color="#fff" />
        </PlusIconWrapper>
        <p>Buat Cerita</p>
      </CreateStory>
      {storyUser.map((li, index) => {
        return width >= 1024 && width < 1440
          ? index < 4 && (
              <StoryUser key={li.id}>
                <img
                  src="https://placeimg.com/640/480/any"
                  alt="dummy"
                  className="image-story"
                />
                <ProfileWrapper>
                  <img src={li.avatar} alt="profile" />
                </ProfileWrapper>
                <p>
                  {li.first_name} {li.last_name}
                </p>
              </StoryUser>
            )
          : width < 1024
          ? index < 3 && (
              <StoryUser key={li.id}>
                <img
                  src="https://placeimg.com/640/480/any"
                  alt="dummy"
                  className="image-story"
                />
                <ProfileWrapper>
                  <img src={li.avatar} alt="profile" />
                </ProfileWrapper>
                <p>
                  {li.first_name} {li.last_name}
                </p>
              </StoryUser>
            )
          : index < 5 && (
              <StoryUser key={li.id}>
                <img
                  src="https://placeimg.com/640/480/any"
                  alt="dummy"
                  className="image-story"
                />
                <ProfileWrapper>
                  <img src={li.avatar} alt="profile" />
                </ProfileWrapper>
                <p>
                  {li.first_name} {li.last_name}
                </p>
              </StoryUser>
            );
      })}
      <ArrowRightWrapper name="Lihat Semua Cerita">
        <ArrowRight />
      </ArrowRightWrapper>
    </StoriesWrapper>
  );
};

export default Stories;
