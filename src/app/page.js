import Image from 'next/image'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ...existing code... */}

      <div className="flex flex-col items-center space-y-4">
        {/* <LoginLink className="text-blue-500 underline">Sign in</LoginLink>
        <RegisterLink className="text-blue-500 underline">Sign up</RegisterLink> */}

        <Link href="/inputPage"className="bg-blue-500 text-white px-4 py-2 rounded-md">Go to Input Page
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={<LoginLink className="text-blue-500 underline">Sign in</LoginLink>}>Sign in</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={ <RegisterLink className="text-blue-500 underline">Sign up</RegisterLink>}>Sign up</button>
       
        <Link href="/inputPage"className="bg-blue-500 text-white px-4 py-2 rounded-md">Go to Input Page
        </Link>
        </div>

      {/* ...existing code... */}
    </main>
  )
}
