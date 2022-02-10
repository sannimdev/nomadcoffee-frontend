import Container from '../components/home/header/Container';
import Header from '../components/home/header';
import HelmetTitle from '../components/HelmetTitle';
import CafeMain from '../components/home/cafe/main/CafeMain';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { gnbListVar } from '../apollo';

const QUERY_COFFEESHOP = gql`
    query SeeCoffeeShops {
        seeCoffeeShops {
            categories {
                name
            }
            id
            name
            user {
                username
                avatarURL
            }
            photo {
                url
            }
        }
    }
`;

function Home() {
    const gnbList = useReactiveVar(gnbListVar);
    const { loading, data } = useQuery(QUERY_COFFEESHOP);

    const items = loading ? [] : data.seeCoffeeShops;
    return (
        <Container>
            <HelmetTitle title={'카페'} />
            <Header gnbList={gnbList} />
            <CafeMain items={items} loading={loading} />
        </Container>
    );
}
export default Home;
