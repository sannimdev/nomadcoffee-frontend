import Container from '../components/home/header/Container';
import Header from '../components/home/header';
import HelmetTitle from '../components/HelmetTitle';
import Content from '../components/home/content';

function Home() {
    return (
        <Container>
            <HelmetTitle title={'카페'} />
            <Header gnbList={['카페']} />
            <Content />
        </Container>
    );
}
export default Home;
