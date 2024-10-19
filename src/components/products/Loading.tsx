
export default function ProductsLoading() {
    return [...Array(20).map(x => ({ first_name: '', last_name: '' }))].map(() => (
        <div className="rounded-lg border  bg-gray-400 h-[500px] animate-pulse"/>
    ))
}
