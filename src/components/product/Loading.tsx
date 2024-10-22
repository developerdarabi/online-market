
export default function ProductLoading() {
    return (
        <section className="relative mt-24">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-md:px-2 ">
                    <div className="xl:aspect-[16/14] aspect-[16/10]  max-h-[600px] bg-gray-500 animate-pulse rounded-xl" />
                    <div
                        className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div className="data w-full max-w-xl">
                            <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md w-[40%]" />
                            <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize bg-gray-500 animate-pulse h-[150px] rounded-md" />
                            <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md w-[30%]" />
                            <ul className="grid gap-y-4 mb-8">
                                <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md w-[40%]" />
                                <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md w-[40%]" />
                                <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md w-[40%]" />
                                <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md w-[40%]" />
                            </ul>
                            <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                                    <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md" />
                                    <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md" />
                                    <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md" />
                                    <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md" />
                                    <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md" />
                                    <p className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[35px] rounded-md" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                                <div className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[65px] rounded-full" />
                                <div className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[65px] rounded-full" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[65px] w-[20%] rounded-full" />
                                <div className="text-lg font-medium leading-8 mb-4 bg-gray-500 animate-pulse h-[65px] w-full rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
