/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS, WEIGHTS } from '../../constants';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <ButtonWrapper>
          <UnstyledButton onClick={() => onDismiss()}>
            <Icon
              id="close"
              strokeWidth={2}
              color={'var(--colors-gray-900)'}
              size={24}
            />
          </UnstyledButton>
        </ButtonWrapper>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  width: 80%;
  height: 100%;
  margin-left: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 24px;
  margin: 26px 16px;
  margin-left: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--colors-gray-900);
  font-size: calc((18 / 16) * 1rem);
  font-weight: ${WEIGHTS.medium};
  margin: 11px 0;

  &:first-of-type {
    color: var(--colors-secondary)
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 50px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--colors-gray-700);
  font-size: calc((14 / 16) * 1rem);
  margin: 7px 0; 
`;
