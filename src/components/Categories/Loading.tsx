
export default function CategoriesLoading() {
    return [...Array(16).map(x => ({ first_name: '', last_name: '' }))].map(() => (
        <div className="rounded-lg border  bg-gray-400 h-[250px] animate-pulse" />
    ))

}
