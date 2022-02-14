import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as I from '../../assets/icon';
import UserServices from '../../api/user';
import { IContact } from '../../types/contacts.type';

const ContactListWrapper = styled.div<{ scroll: boolean }>`
  position: fixed;
  top: 4rem;
  right: 0;
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

const HeaderContactList = styled.div`
  color: rgb(101, 103, 107);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 90%;

  div {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }
`;

const IconWrapper = styled.div<{ name: string; longText?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgb(224, 225, 228);
  }

  &::after {
    content: ${(props) => (props.name ? `"${props.name}"` : '')};
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: absolute;
    font-size: 0.8rem;
    padding: 0.5rem;
    top: 3rem;
    left: ${(props) => (props.longText ? '-10rem' : '0')};
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

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const AvatarWrapper = styled.div`
  position: relative;

  .online {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(49, 162, 76);
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    border: 1px solid white;
  }

  img {
    border-radius: 50%;
    width: 2rem;
    margin-right: 0.5rem;
  }
`;

const ContactList = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    UserServices.getUsers()
      .then((res) => {
        setContacts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ContactListWrapper
      onMouseOver={() => setIsScroll(true)}
      onMouseLeave={() => setIsScroll(false)}
      scroll={isScroll}
    >
      <HeaderContactList>
        <p>Kontak</p>
        <div>
          <IconWrapper name="Forum Baru">
            <I.Forum />
          </IconWrapper>
          <IconWrapper name="Cari berdasarkan nama atau grup" longText>
            <I.SearchIcon />
          </IconWrapper>
          <IconWrapper name="Opsi">
            <I.Option />
          </IconWrapper>
        </div>
      </HeaderContactList>
      {contacts.map((contact) => (
        <ContactWrapper key={contact.id}>
          <AvatarWrapper>
            <img src={contact.avatar} alt={contact.first_name} />
            <div className="online"></div>
          </AvatarWrapper>
          <p>
            {contact.first_name} {contact.last_name}
          </p>
        </ContactWrapper>
      ))}
      {contacts.map((contact) => (
        <ContactWrapper key={contact.id}>
          <AvatarWrapper>
            <img src={contact.avatar} alt={contact.first_name} />
            <div className="online"></div>
          </AvatarWrapper>
          <p>
            {contact.first_name} {contact.last_name}
          </p>
        </ContactWrapper>
      ))}
    </ContactListWrapper>
  );
};

export default ContactList;
