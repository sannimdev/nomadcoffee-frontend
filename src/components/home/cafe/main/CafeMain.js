import { Link } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../../../../routes';
import Avatar from '../../../Avatar';
import ContentWrapper from '../../ContentWrapper';
import { InitializedButton } from '../../shared';

const Gallery = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;

const Item = styled.div`
    width: 100%;
`;

const Author = styled.div`
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
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

const Thumbnail = styled.div`
    border-radius: 5px;
    height: 250px;
    background: ${(props) => `no-repeat center/100% url('${props['data-src']}')`};
    &:hover {
        background-size: 120%;
    }
    transition: background-size 1s ${(props) => props.theme.cubicBezier};
    cursor: pointer;
    user-select: none;
`;
const Title = styled.p`
    font-size: 1.05rem;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
`;

const defaultCafeImage =
    'https://images.unsplash.com/photo-1532490389938-2856e3f1560a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80';
function CafeMain({ items = [], loading }) {
    return (
        <ContentWrapper>
            {loading ? (
                <div>로딩</div>
            ) : (
                <Gallery>
                    {items &&
                        items.map((item) => {
                            const {
                                id,
                                user: { avatarURL, username },
                                name,
                                photo,
                            } = item;
                            return (
                                <li key={id}>
                                    <Link to={routes.shop.getPath(id)}>
                                        <Item>
                                            <Author>
                                                <Avatar src={avatarURL} />
                                                <span>{username}</span>
                                                <FollowButton>팔로우</FollowButton>
                                            </Author>
                                            <Thumbnail
                                                data-desc="썸네일"
                                                data-src={
                                                    photo?.thumbnail || photo?.medium || photo?.url || defaultCafeImage
                                                }
                                            ></Thumbnail>
                                            <Title>{name}</Title>
                                        </Item>
                                    </Link>
                                </li>
                            );
                        })}
                </Gallery>
            )}
        </ContentWrapper>
    );
}

export default CafeMain;
