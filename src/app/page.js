
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';
import { useRouter } from 'next/navigation';




export default function Home() {

  const handleButtonClick = () => {
    console.log('Button clicked!');
    router.push('/inputPage.js');
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ...existing code... */}

      <div className="flex flex-col items-center space-y-4">
        {/* <LoginLink className="text-blue-500 underline">Sign in</LoginLink>
        <RegisterLink className="text-blue-500 underline">Sign up</RegisterLink> */}

        {/* <Link href="/inputPage"className="bg-blue-500 text-white px-4 py-2 rounded-md">Go to Input Page
        </Link> */}
      </div>

      <div className="flex flex-col items-center space-y-4">
       <LoginLink className="bg-blue-500 text-white px-4 py-2 rounded-md" postLoginRedirectURL="/dashboard">Sign in</LoginLink>
       <RegisterLink className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign up</RegisterLink>
       
        <Link href="/inputPage.js"className="bg-blue-500 text-white px-4 py-2 rounded-md" >Go to Input Page
        </Link>
        </div>

      {/* ...existing code... */}
    </main>
  )
}
