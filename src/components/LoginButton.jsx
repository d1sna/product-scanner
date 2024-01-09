import { Capacitor } from "@capacitor/core";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center">
        Signed in as {session?.user?.email} <br />
        <button
          className="bg-red-600 p-5 rounded-xl text-white mt-5"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      Not signed in <br />
      <button
        className="bg-blue-600 p-5 rounded-xl text-white mt-5"
        onClick={async () => {
          const platform = Capacitor.getPlatform();

          if (platform === "web") signIn();
          else {
            await GoogleAuth.initialize();
            const user = await GoogleAuth.signIn();
            console.log({ user });
          }
        }}
      >
        Sign in
      </button>
    </div>
  );
}
