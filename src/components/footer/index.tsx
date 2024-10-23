import { Link } from "react-router-dom";
import { APP_NAME } from "../../Statics";
import { MaxWidth } from "../ui";
import Logo from "../ui/Logo";

export default function FooterDesktop() {
    return (
        <>
            <div className="w-full mt-10">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-current text-background"></path>
                </svg>
            </div>
            <MaxWidth className="bg-background p-4 flex items-start justify-around">
                <div className="">
                    <Logo size={60}/>
                </div>
                <div className="flex xl:flex-row flex-col xl:gap-10 gap-20">
                    <div className="flex flex-col gap-6 text-primary">
                        <h1 className="text-2xl font-bold">{APP_NAME}</h1>
                        <Link className="text-xl font-medium" to={'/products'}>Products</Link>
                        <Link className="text-xl font-medium" to={'/review'}>Reviews</Link>
                        <Link className="text-xl font-medium" to={'/about-us'}>About us</Link>
                        <Link className="text-xl font-medium" to={'/blog'}>Blog</Link>
                    </div>
                    <div className="flex flex-col gap-6 text-primary">
                        <h1 className="text-2xl font-bold">More</h1>
                        <Link className="text-xl font-medium" to={'/faqs'}>FAQs</Link>
                        <Link className="text-xl font-medium" to={'/contact-us'}>Contact us</Link>
                        <Link className="text-xl font-medium" to={'/terms-of-use'}>Terms of services</Link>
                        <Link className="text-xl font-medium" to={'/privacy-policy'}>Privacy policy</Link>
                        <Link className="text-xl font-medium" to={'/shopping_returns'}>Shopping and returns</Link>
                        <Link className="text-xl font-medium" to={'/financing'}>Financing</Link>
                    </div>
                </div>
                <div className="flex xl:flex-row flex-col xl:gap-10 gap-20">
                    <div className="flex flex-col gap-6 text-primary">
                        <h1 className="text-2xl font-bold">Social</h1>
                        <Link className="text-xl font-medium" to={'/social'}>Facebook</Link>
                        <Link className="text-xl font-medium" to={'/social'}>Instagram</Link>
                        <Link className="text-xl font-medium" to={'/social'}>Twitter</Link>
                        <Link className="text-xl font-medium" to={'/social'}>Pinterest</Link>
                    </div>
                    <div className="flex flex-col gap-6 text-primary">
                        <h1 className="text-2xl font-bold">Stay in know</h1>
                        <input placeholder="Email" className="text-xl font-medium border rounded-xl p-2" />
                        <button className="text-md font-medium bg-primary rounded-xl text-white p-2">Submit</button>
                    </div>
                </div>
            </MaxWidth>
        </>
    )
}
