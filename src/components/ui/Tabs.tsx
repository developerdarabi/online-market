
export interface TabType {
    id: number
    title: string
    onClick: (id: number) => void
}

interface Props {
    tabs: TabType[]
    activeTabId: number
}

export default function Tabs({ tabs, activeTabId }: Props) {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex ">
                {
                    tabs.map((tab: TabType) => (
                        <li className="me-2 w-full cursor-pointer" onClick={() => tab.onClick(tab.id)}>
                            <span className={`inline-block p-1 px-2 border-b-2 border-transparent ${tab.id === activeTabId ? 'text-primary border-primary' : 'text-gray-400'} rounded-t-lg hover:text-gray-600 hover:border-gray-300 duration-300`}>
                                {tab.title}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}
