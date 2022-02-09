import { useReactiveVar } from '@apollo/client';
import { gnbListVar } from '../apollo';
import HelmetTitle from '../components/HelmetTitle';
import Header from '../components/home/header';
import Container from '../components/home/header/Container';

function CoffeeShopAdd() {
    const gnbList = useReactiveVar(gnbListVar);
    return (
        <Container>
            <HelmetTitle title={'카페 등록하기'} />
            <Header gnbList={gnbList} />
        </Container>
    );
}
export default CoffeeShopAdd;
