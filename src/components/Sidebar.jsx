import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";


const Sidebar = () => {
    return (
        <>
            <DesktopSideBar />
            <MobileSidebar />


        </>
    )
}

export default Sidebar
const DesktopSideBar = () => {
    return (
        <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
            <div className="flex flex-col gap-20 sticky top-10 left-0">
                <div className="w-full">
                    <img src="/logo.svg" alt="" className="hidden md:block" />
                    <img src="/mobile-logo.svg" alt="" className="block md:hidden" />
                </div>
                <ul className="flex flex-col items-center md:items-start gap-8">

                    <Link to={'/'} className="flex gap-1">
                        <IoHomeOutline className="text-2xl" />
                        <span className="font-bold hidden md:block"> Home</span>

                    </Link>
                    <Link to={'/favorites'} className="flex gap-1">
                        <MdFavoriteBorder className="text-2xl" />
                        <span className="font-bold hidden md:block"> Favorites</span>

                    </Link>
                </ul>
            </div>

        </div>


    )
}

const MobileSidebar = () => {
    return (
        <div
            className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2  sm:hidden">


            <Link to={'/'} className="flex gap-1">
                <IoHomeOutline className="text-2xl" />
                <span className="font-bold hidden md:block"> Home</span>

            </Link>
            <Link to={'/favorites'} className="flex gap-1">
                <MdFavoriteBorder className="text-2xl" />
                <span className="font-bold hidden md:block"> Favorites</span>

            </Link>

        </div>
    )
}