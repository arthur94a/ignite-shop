interface ProductProps {
    params: Promise<{id: string}>
}

export default async function Product({params}:ProductProps) {
    const {id} = await params;
    return (
        <h1>Product {id}</h1>
    )
}