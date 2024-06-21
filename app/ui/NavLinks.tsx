"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  UserGroupIcon,
  ArchiveBoxIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "Cotizaciones",
    href: "/dashboard/cotizaciones",
    icon: ArchiveBoxIcon,
  },
  {
    name: "Inventario",
    href: "/dashboard/inventory",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Perfil",
    href: "/dashboard/profile",
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-lg text-white font-bold hover:bg-pink-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-pink-100 text-black": pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
