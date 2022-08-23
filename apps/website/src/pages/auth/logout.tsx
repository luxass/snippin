import { signOut } from 'next-auth/react';

export default function SignoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121B67] to-[#76030F] flex items-center justify-center">
      <div className="border border-white rounded px-12 py-5">
        <h1 className="text-4xl mb-6 text-center text-white">Logout</h1>
        <p className="text-lg text-white">Are you sure you want to log out?</p>
        <button
          type="button"
          className="block mx-auto border border-white px-4 py-2 mt-8 rounded-md text-white"
          onClick={() => signOut({
            callbackUrl: '/',
          })}>
          Log out
        </button>
      </div>
    </div>
  );
}
