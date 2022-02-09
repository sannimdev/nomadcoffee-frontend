import Container from '../components/home/header/Container';
import Header from '../components/home/header/Header';
import HelmetTitle from '../components/HelmetTitle';

function Home() {
    return (
        <Container>
            <HelmetTitle title={'카페'} />
            <Header gnbList={['카페']} />
        </Container>
    );
}
export default Home;
