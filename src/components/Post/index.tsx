import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import styled from 'styled-components';
import { EarcthIcon, Option } from '../../assets/icon';
import { Like, Profile } from '../../assets/image';

const PostWrapper = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 1rem auto;
  /* min-height: 50vh; */
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }

  .like-icon {
    width: 2rem;
    margin-left: 1rem;
  }

  hr {
    width: 90%;
    margin: 0.5rem auto 0;
  }
`;

const HeaderPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
`;

const UserWrapper = styled.div`
  display: flex;

  .user-posting {
    margin-left: 0.5rem;
  }

  .user {
    font-weight: 600;
  }

  .time-ago {
    color: rgb(101, 103, 107);
    font-size: 12px;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid rgb(24, 118, 242);
  }
`;

const IconOptionWrapper = styled.div`
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: rgb(224, 225, 228);
  }
`;

const ContentWrapper = styled.div`
  padding: 0 0.75rem 0.75rem;

  span {
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PictureWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const InfoCommentAndLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const InfoComment = styled.div`
  color: rgb(101, 103, 107);
  font-weight: 600;
  margin-right: 0.65rem;
`;

const IconLikeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.75rem;

  p {
    color: rgb(96, 98, 102);
  }
`;

const FooterPost = styled.div`
  display: flex;
  justify-content: space-around;
  color: rgb(101, 103, 107);
  font-weight: 600;
  padding: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30%;
    border-radius: 10px;
    padding: 0.5rem 0;

    &:hover {
      background-color: rgb(240, 242, 245);
    }
  }

  p {
    margin-left: 0.5rem;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;

interface Props {
  text: string;
}

const Post = ({ text }: Props) => {
  const [isShowLongText, setIsShowLongText] = useState<boolean>(false);

  return (
    <PostWrapper>
      <HeaderPost>
        <UserWrapper>
          <div>
            <img src={Profile} alt="profile" />
          </div>
          <div className="user-posting">
            <p className="user">Facebook User</p>
            <p className="time-ago">
              5 hari yang lalu . <EarcthIcon />
            </p>
          </div>
        </UserWrapper>
        <IconOptionWrapper>
          <Option />
        </IconOptionWrapper>
      </HeaderPost>
      <ContentWrapper>
        <p>
          {text.length > 100 && !isShowLongText
            ? `${text.slice(0, 99)}...`
            : text}{' '}
          <span onClick={() => setIsShowLongText(true)}>
            {!isShowLongText && text ? 'Lihat Selengkapnya' : null}
          </span>
        </p>
      </ContentWrapper>
      <PictureWrapper>
        <img src="https://placeimg.com/640/480/tech" alt="Dummy" />
      </PictureWrapper>
      <InfoCommentAndLike>
        <IconLikeWrapper>
          <img src={Like} alt="Like" className="like-icon" /> <p>10</p>
        </IconLikeWrapper>
        <InfoComment>
          <p>10 Komentar 10 Kali dibagikan</p>
        </InfoComment>
      </InfoCommentAndLike>
      <hr />
      <FooterPost>
        <div>
          <AiOutlineLike color="rgb(101, 103, 107)" size="1.5em" /> <p>Suka</p>
        </div>
        <div>
          <GoComment color="rgb(101, 103, 107)" size="1.5em" /> <p>Komentari</p>
        </div>
        <div>
          <RiShareForwardLine color="rgb(101, 103, 107)" size="1.5em" />
          <p>Bagikan</p>
        </div>
      </FooterPost>
    </PostWrapper>
  );
};

export default Post;
