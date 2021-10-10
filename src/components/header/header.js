import React from 'react';
import { 
    HeaderContainer,
    HeaderGreeting,
    HeaderSortContainer,
    SortingButton
} from './headerComponents';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderGreeting>
                Альфа-Банк
            </HeaderGreeting>
            <HeaderSortContainer>
                <SortingButton>
                    Sort for Liked
                </SortingButton>
            </HeaderSortContainer>
        </HeaderContainer>
    );
};

export default Header;