import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper';
import { InitializedButton } from '../shared';

const Gallery = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;

const Item = styled.div``;

const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
`;

const FollowButton = styled(InitializedButton)`
    font-weight: 900;
    font-size: 0.98rem;
    color: ${(props) => props.theme.primary};
    &::before {
        content: '·';
        margin-right: 3px;
        font-weight: 600;
        font-size: 0.9rem;
        color: ${(props) => props.theme.color};
    }
`;

const cubicBezier = `cubic-bezier(0, 1.21, 1, 1)`;
const Thumbnail = styled.div`
    border-radius: 5px;
    height: 250px;
    background: ${(props) => `no-repeat center/100% url('${props['data-src']}')`};
    &:hover {
        background-size: 120%;
    }
    transition: background-size 1s ${cubicBezier};
`;

const fake = {
    avatar: 'https://avatars.githubusercontent.com/u/22428471?v=4',
    thumbnail:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164432136734757106.jpeg?gif=1&w=1280',
};

function Content() {
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
                avatarURL: fake.avatar,
            },
            thumbnail: fake.thumbnail,
        },
    ];
    return (
        <ContentWrapper>
            <Gallery>
                {items.map((item) => (
                    <li>
                        <Item>
                            <Author>
                                <Avatar src={fake.avatar} />
                                <span>{item.user.username}</span>
                                <FollowButton>팔로우</FollowButton>
                            </Author>
                            <Thumbnail data-desc="썸네일" data-src={item.thumbnail}></Thumbnail>
                        </Item>
                    </li>
                ))}
            </Gallery>
        </ContentWrapper>
    );
}

export default Content;
