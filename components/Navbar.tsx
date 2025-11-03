import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center fixed top-0 z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            <Link href={'/'} className="hidden sm:flex items-center gap-1">
                <Image
                    src={'/icons/logo.svg'}
                    width={32}
                    height={32}
                    alt={'Yoom logo'}
                    className="max-sm:size-10"
                />
                <p className="text-[26px] font-bold text-white max-sm:hidden">Yoom</p>
            </Link>
            <div className="flex items-center">
                <MobileNav />
            </div>
        </div>
    );
}

export default Navbar;