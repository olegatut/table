import React from 'react';

interface UseFetchProduct {
    (): UseFetchProductReturn;
}

interface UseFetchProductReturn {
    fetch: () => void;
    loading: boolean;
    products: Product[];
}

interface Product {
    id: number;
    title: string;
    price: number;
}

const useFetchProduct: UseFetchProduct = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState(false);

    const fetchCallback = React.useCallback(() => {
        setLoading(true);

        fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
            .then(res => res.json())
            .then(res => setProducts(res.products))
            .catch(() => setProducts([]))
            .finally(() => setLoading(false));
    }, [fetch]);

    return {
        loading,
        fetch: fetchCallback,
        products,
    }
}

export { useFetchProduct };