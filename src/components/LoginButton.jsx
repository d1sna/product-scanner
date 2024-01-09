import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen border">
        Signed in as {session?.user?.email} <br />
        <button className="bg-red-600 p-5 rounded-xl text-white mt-5" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen border">
      Not signed in <br />
      <button className="bg-blue-600 p-5 rounded-xl text-white mt-5" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
