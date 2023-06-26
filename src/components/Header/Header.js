import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LeftSide>
          <Logo />
        </LeftSide>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <RightSide>
          <MobileNav>
            <UnstyledButton>
              <Icon
                id="shopping-bag"
                strokeWidth={2}
                color={'var(--colors-gray-900)'}
                size={24}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Icon
                id="search"
                strokeWidth={2}
                color={'var(--colors-gray-900)'}
                size={24}
              />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon
                id="menu"
                strokeWidth={2}
                color={'var(--colors-gray-900)'}
                size={24}
              />
            </UnstyledButton>
          </MobileNav>
        </RightSide>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const flexSpacing = 'clamp(16px, 7.2vw - 0.75rem, 32px)';

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px ${flexSpacing};
  border-bottom: 1px solid var(--colors-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    align-items: center;
  }
`;

const LeftSide = styled.div`
  flex: 2 1 0;
  margin-right: auto;
`;

const RightSide = styled.div`
  flex: 2 100 0;
  margin-right: auto;
`;

const Nav = styled.nav`
  flex: 6 1 0;
  display: flex;
  justify-content: space-between;
  gap: clamp(1rem, 14vw - 4rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--colors-secondary);
  }
`;

const MobileNav = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: ${flexSpacing};
    justify-content: flex-end;
  }
`;

export default Header;
