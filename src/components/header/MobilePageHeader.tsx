import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function MobilePageHeader() {
    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between fixed bg-background border shadow-md top-0 right-0 z-50 w-full h-12 px-2'>
            <HiArrowNarrowLeft className="text-primary" size={25} onClick={() => navigate(-1)} />
            <h1 className="text-sm font-medium text-primary">{document.title.split('|')[1]??document.title.split('|')[0]}</h1>
        </div>
    )
}
