import { useEffect } from "react"
import { APP_NAME } from "../Statics"

export default function DocumentTitle({ title, isAbsolute = false }: { title: string, isAbsolute?: boolean }) {
    useEffect(() => {
        document.title = isAbsolute ? title : `${title}`
    }, [])
    return null
}
