import { Link } from "react-router-dom";
import DocumentTitle from "../utils/DocumentTitle";

export default function NotFound() {
    return (
        <div className="h-lvh flex items-center justify-center flex-col gap-6">
            <DocumentTitle title="پیدا نشد" isAbsolute={true}/>
            <h1 className="md:text-4xl sm:text-xl text-xs font-bold ">متاسفانه چیزی که دنبالش بودی پیدا نشد</h1>
            <Link to={'/'} className="bg-orange-400 text-white sm:px-12 px-6 sm:py-2 py-1 rounded-xl" >بازگشت</Link>
        </div>
    )
}
