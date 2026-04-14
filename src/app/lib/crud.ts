import { PublicKey, SystemProgram } from "@solana/web3.js";
import { getProgram, getProvider } from "./anchor";
import { getJournalPDA } from "./pda";
import { useJournal } from "../hooks/useJournal";

export const createEntry = async (
  title: string,
  message: string,
  program: any,
  publicKey: any
) => {
  const owner = publicKey;

  console.log({ owner });

  console.log(program.programId.toBase58());
  //   const pda = getJournalPDA(title, owner);

  const pda = PublicKey.findProgramAddressSync(
    [Buffer.from(title), owner.toBuffer()],
    publicKey
  )[0];

  //   console.log("Title:", title);
  //   console.log("Owner:", owner?.toBase58());
  console.log("PDA:", pda.toBase58());

  const result = await program.methods
    .createJournalEntry(title, message)
    .accounts({
      journalEntryState: pda,
      owner: owner,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

  console.log("result from create entry", result);
  return result;
};

export const getEntry = async (title: string, program: any, publicKey: any) => {
  const owner = publicKey;

  const pda = getJournalPDA(title, owner);

  console.log("Title:", title);
  console.log("Owner:", owner.toBase58());
  console.log("PDA:", pda.toBase58());

  try {
    const entry = await program.account.journalEntryState.fetch(pda);
    return entry;
  } catch (err) {
    console.log("error get entry ", err);
    console.error("Entry not found for:", title);
    return null;
  }
};

export const getUserEntries = async (program: any, publicKey: any) => {
  const owner = publicKey;

  const entries = await program.account.journalEntryState.all([
    {
      memcmp: {
        offset: 8, // discriminator = 8 bytes
        bytes: owner.toBase58(),
      },
    },
  ]);

  return entries;
};
