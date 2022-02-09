import styled from 'styled-components';
import Container from '../components/home/Container';
import ContentWrapper from '../components/home/ContentWrapper';
import Header from '../components/home/Header';
import HeaderMenu from '../components/home/HeaderMenu';
import HeaderPrimary from '../components/home/HeaderPrimary';
import SearchBox from '../components/home/SearchBox';

function Home() {
    return (
        <Container>
            <Header gnbList={['카페']} />
        </Container>
    );
}
export default Home;
