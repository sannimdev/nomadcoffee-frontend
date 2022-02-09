import Container from '../components/home/header/Container';
import Header from '../components/home/header';
import HelmetTitle from '../components/HelmetTitle';
import CafeMain from '../components/home/cafe/main/CafeMain';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

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

const fake = {
    avatar: 'https://avatars.githubusercontent.com/u/22428471?v=4',
    thumbnail:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164432136734757106.jpeg?gif=1&w=1280',
};

const items = [
    {
        name: '스타벅스 강남점',
        user: {
            username: 'mydass',
            avatarURL: fake.avatar,
        },
        thumbnail: fake.thumbnail,
    },
    {
        name: '스타벅스 강남점',
        user: {
            username: 'mydass',
            avatarURL: fake.avatar,
        },
        thumbnail: fake.thumbnail,
    },
    {
        name: '스타벅스 강남점',
        user: {
            username: 'mydass',
            avatarURL: fake.avatar,
        },
        thumbnail: fake.thumbnail,
    },
    {
        name: '스타벅스 강남점',
        user: {
            username: 'mydass',
            avatarURL: null,
        },
        thumbnail: fake.thumbnail,
    },
];
function Home() {
    const { loading, data } = useQuery(QUERY_COFFEESHOP);

    const items = loading ? [] : data.seeCoffeeShops;
    return (
        <Container>
            <HelmetTitle title={'카페'} />
            <Header gnbList={['카페']} />
            <CafeMain items={items} loading={loading} />
        </Container>
    );
}
export default Home;
