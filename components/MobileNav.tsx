"use client";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants/data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { XIcon } from 'lucide-react';
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src={'/icons/hamburger.svg'}
                        width={36}
                        height={36}
                        alt="hamburger menu icon"
                        className="cursor-pointer sm:hidden"
                    />
                </SheetTrigger>
                <SheetContent side={'left'} className="border-none bg-dark-1">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-6">
                        <Link href={'/'} className="flex items-center gap-1">
                            <Image
                                src={'/icons/logo.svg'}
                                width={32}
                                height={32}
                                alt={'Yoom logo'}
                                className="max-sm:size-10"
                            />
                            <p className="text-[26px] font-bold text-white">Yoom</p>
                        </Link>
                        <div className="flex flex-col justify-between h-[calc(100vh-120px)]">
                            <section className="flex flex-col gap-2 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route ||
                                        (link.route !== '/' && pathname.startsWith(link.route));
                                    return (
                                        <SheetClose asChild key={link.label}>
                                            <Link
                                                href={link.route}
                                                className={cn(
                                                    'flex gap-4 items-center p-4 rounded-lg w-full',
                                                    {
                                                        'bg-blue-1': isActive,
                                                    }
                                                )}
                                            >
                                                <Image
                                                    src={link.imgUrl}
                                                    alt={link.label}
                                                    width={24}
                                                    height={24}
                                                />
                                                <p className="text-lg font-semibold">
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
}
export default MobileNav;