import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey("4p4QUhfsxz1VvyYvJLjH5NoyGwJRVQ8j6jxS4iueDAZ8");

export const getJournalPDA = (title: string, owner: PublicKey) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(title), owner.toBuffer()],
    programId
  )[0];
};
