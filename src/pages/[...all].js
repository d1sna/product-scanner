import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/tabs/AppShell"), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
