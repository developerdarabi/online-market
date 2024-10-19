import FooterDesktop from "../components/footer";
import DesktopHeader from "../components/header";
import RoutesWrapper from "../utils/Routes";
import DesktopTemplate from "./Desktop";

export default function TemplateWrapper() {
    return <DesktopTemplate>
        <DesktopHeader />
        <RoutesWrapper />
        <FooterDesktop/>
    </DesktopTemplate>
}
