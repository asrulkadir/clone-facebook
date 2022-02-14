import React from 'react';
import styled from 'styled-components';
import ContactList from '../ContactList';
import Header from '../Header';
import SideNav from '../SideNav';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 242, 245);
`;

const Content = styled.div`
  width: 50%;
  margin: auto;
  flex: 1;

  @media (max-width: 767px) {
    width: 90%;
    /* overflow: hidden; */
  }
`;

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Header />
      <SideNav />
      <ContactList />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
