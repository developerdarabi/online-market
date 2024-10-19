import { jsx as _jsx } from "react/jsx-runtime";
export default function CentralContainer({ children, ...props }) {
    return (_jsx("div", { className: 'flex justify-center items-center h-full', ...props, children: children }));
}
