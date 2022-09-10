import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { IFetchStores } from '../../apis/api';
import { useSetRecoilState } from 'recoil';
import { isOpenAtom } from '../../recoil/atoms';

interface IStoreProps {
    item: IFetchStores
}


const StoreList = ({item}:IStoreProps) => {

    const setOpen = useSetRecoilState(isOpenAtom);
    const handleOpen = () => setOpen(prev => !prev);

    return (
        <Item key={item.id}>
            <Link href={`/?id=${item.id}`} as={`/${item.id}`} scroll={false}>
            <a>
                <Image
                src={item.image}
                alt={item.name}
                width="250px"
                height="250px"
                onClick={handleOpen}
                />
            </a>
            </Link>
        </Item>
    )
}

export default StoreList;

const Item = styled.div`
    display: block;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.2s ease;

    img {
        border-radius: 15px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;
