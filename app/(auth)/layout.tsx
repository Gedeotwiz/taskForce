/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */


import GContainer from "@/components/share/container"
import { ReactNode } from "react"

const AdminLayout = ({ children }: { children: ReactNode })=> {
    return <GContainer>{children}</GContainer>
}

export default AdminLayout
