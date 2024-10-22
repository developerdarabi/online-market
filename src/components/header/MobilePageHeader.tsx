import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function MobilePageHeader() {
    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between fixed bg-white border shadow-md top-0 right-0 z-50 w-full h-12 px-2'>
            <HiArrowNarrowLeft size={25} onClick={() => navigate(-1)} />
            <h1>{document.title.split('|')[1]??document.title.split('|')[0]}</h1>
        </div>
    )
}
