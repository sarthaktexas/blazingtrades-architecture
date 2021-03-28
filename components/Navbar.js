import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { FiLogIn } from 'react-icons/fi'

export default function Nav() {
    const { user, error, isLoading } = useUser()
    return (
        <nav className="text-white sticky top-0 z-50 flex flex-wrap items-center py-5 px-10">
            <div className="flex-1 flex justify-between items-center text-xl">
                <Link href="/">
                    <a className="text-xl uppercase font-bold text-red-500">BlazingTrades</a>
                </Link>
            </div>
            <Link href="/api/auth/login">
                <a className="rounded px-2 py-1 font-bold flex flex-row">
                    <div className="mr-4">Log In</div>
                    <div className="self-center"><FiLogIn size={20} /></div>
                </a>
            </Link>
        </nav>
  );
};