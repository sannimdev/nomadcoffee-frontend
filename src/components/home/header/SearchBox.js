import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: space-around;
    height: 40px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.lightGray};
    border-radius: 5px;
`;

const SearchInput = styled.input`
    padding: 0 10px;
    font-size: 0.89rem;
`;

function SearchBox() {
    return (
        <Container>
            <FontAwesomeIcon icon={faSearch}>
                <span>검색</span>
            </FontAwesomeIcon>
            <SearchInput placeholder="매장 검색" />
        </Container>
    );
}
export default SearchBox;
