import { WalletButton } from "./components/journal/ConnectToWallet";
import CreateEntry from "./components/journal/CreateEntry";
import FetchAllEntries from "./components/journal/FetchAllEntries";
import FetchEntry from "./components/journal/FetchEntry";

export default function Home() {
  return (
    <div>
      <h1>Journal dApp</h1>
      <WalletButton />
      <CreateEntry />
      <FetchEntry />
      <FetchAllEntries />
    </div>
  );
}
