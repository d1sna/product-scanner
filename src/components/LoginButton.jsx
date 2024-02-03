import { Capacitor } from "@capacitor/core";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  const platform = Capacitor.getPlatform();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center">
        Signed in as {session?.user?.email} <br />
        <button
          className="bg-red-600 p-5 rounded-xl text-white mt-5"
          onClick={async () => {
            if (platform === "web") signOut();
            else {
              await GoogleAuth.signOut();
              await signOut({ redirect: false });
            }
          }}
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
          // if (platform === "web") signIn();
          // else {
          // await GoogleAuth.initialize();
          // const user = await GoogleAuth.signIn();

          // if (user)
          await signIn("google_manually_auth", {
            // redirect: false,
            callbackUrl: url,
            // email: user.email,
            // image: user.imageUrl,
            // name: user.name,
          });
          // }
        }}
      >
        Sign in
      </button>
    </div>
  );
}
