import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import idl from "../../../anchor/target/idl/crud.json";

const programId = new PublicKey("4p4QUhfsxz1VvyYvJLjH5NoyGwJRVQ8j6jxS4iueDAZ8");

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

export const getProvider = () => {
  return new AnchorProvider(connection, window.solana, {
    commitment: "confirmed",
  });
};

export const getProgram = () => {
  const provider = getProvider();

  return new Program(idl as any, programId, provider);
};
