import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import idl from "../../../anchor/target/idl/crud.json";
import { Crud } from "@/anchor/target/types/crud";

const programId = new PublicKey("4p4QUhfsxz1VvyYvJLjH5NoyGwJRVQ8j6jxS4iueDAZ8");

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

export const getProvider = (wallet: any) => {
  return new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
};

export const getProgram = (wallet: any) => {
  const provider = getProvider(wallet);

  if (!idl.accounts) {
    throw new Error("IDL is missing accounts");
  }

  return new Program<Crud>(idl as Crud, programId, provider);
};
