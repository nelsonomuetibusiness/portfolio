"use client";

import Link from "next/link";
import { navigationItems } from "./Navbar";

export function Footer() {
    return (
        <footer className="my-12 mt-24 bg-blue-300">
            <ul className="flex flex-wrap justify-center">
                {navigationItems.map((item, index) => (
                    <div key={index} className="px-5 py-2">
                        <Link href={item.href} className="text-bold text-xl hover:underline">
                            {item.name}
                        </Link>
                    </div>
                ))}
            </ul>

            <p className="mt-2 text-center  text-muted-foreground">
                &copy;  Nelson Omueti. All Rights reserved.
            </p>
        </footer>
    );
}