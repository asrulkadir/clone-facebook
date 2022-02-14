import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import PostServices from '../../api/posts';
import { IPost } from '../../types/post.type';
import Stories from '../../components/Stories';
import { AsrulKadir } from '../../assets/image';
import { PhotoIcon, VideoStreamingIcon } from '../../assets/icon';

const HomeWrapper = styled.div`
  margin-top: 5rem;
`;

const CreatePost = styled.div`
  width: 80%;
  margin: 1.5rem auto 1rem;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  min-height: 7.5rem;
  padding: 0.75rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  hr {
    margin-top: 1rem;
  }
`;

const WhatDoYouThink = styled.div`
  display: flex;

  div {
    margin-left: 1rem;
    background-color: rgb(240, 242, 245);
    border: none;
    border-radius: 50px;
    width: 85%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: rgb(123, 103, 107);
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background-color: rgb(222, 222, 223);
    }
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;

const PhotoAndStreaming = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: rgb(240, 242, 245);
    }
  }

  p {
    margin-left: 0.5rem;
    color: rgb(101, 103, 107);
    font-weight: 600;
  }
`;

const Home = () => {
  const [dataPost, setDataPost] = useState<IPost[]>([]);

  useEffect(() => {
    PostServices.getPosts()
      .then((res) => {
        setDataPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <HomeWrapper>
        <Stories />
        <CreatePost>
          <WhatDoYouThink>
            <img src={AsrulKadir} alt="Asrul" />
            <div>
              <p>Apa yang anda pikirkan, Asrul?</p>
            </div>
          </WhatDoYouThink>
          <hr />
          <PhotoAndStreaming>
            <div>
              <VideoStreamingIcon /> <p>Video Siaran Langsung</p>
            </div>
            <div>
              <PhotoIcon /> <p>Foto/Video</p>
            </div>
          </PhotoAndStreaming>
        </CreatePost>
        {dataPost.map((data) => {
          return <Post key={data.id} text={data.body} />;
        })}
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
