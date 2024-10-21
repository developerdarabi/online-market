import { Outlet } from "react-router-dom";
import FooterDesktop from "../components/footer";
import DesktopHeader from "../components/header";
import DesktopTemplate from "./Desktop";
import MobileTemplate from "./Mobile";
import useViewport from "../hooks/useViewPort";

export default function TemplateWrapper() {
    const {isMobile} = useViewport()
    if(isMobile){
        return <MobileTemplate>
            <Outlet />
        </MobileTemplate>
    }
    return <DesktopTemplate>
        <DesktopHeader />
        <Outlet />
        <FooterDesktop />
    </DesktopTemplate>
}
