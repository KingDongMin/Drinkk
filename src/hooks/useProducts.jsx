import { addProduct as fetchProduct, getProdcuts } from '../api/firebase';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';

export default function useProducts() {
    const queryClient = useQueryClient();

    const getProductsQuery = useQuery(
        ['products'],
        () => getProdcuts().then(data => data),
        {
            staleTime: 1000 * 60 * 10,
        }
    );

    const addProducts = useMutation(
        //
        ({ datas, imgURL }) => fetchProduct({ datas, imgURL }),
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    );

    return { getProductsQuery, addProducts };
}
