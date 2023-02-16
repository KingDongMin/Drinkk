import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    addCart as fetchAddCarts,
    getCart as fetchGetCarts,
} from '../api/firebase';

export default function useCarts({ uid }) {
    const queryClient = useQueryClient();

    const getCarts = useQuery(['cart' + uid], fetchGetCarts(uid), {
        staleTime: 1000 * 60 * 10,
    });

    const addCarts = useMutation(
        ({ uid, product, option }) => fetchAddCarts({ uid, product, option }),
        {
            onSuccess: () => queryClient.invalidateQueries(['cart' + uid]),
        }
    );

    return { getCarts, addCarts };
}
