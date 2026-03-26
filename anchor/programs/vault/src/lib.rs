use anchor_lang::prelude::*;
use anchor_lang::system_program::{transfer, Transfer};

#[cfg(test)]
mod tests;

declare_id!("ALWmoQi8Xtdd3rxB9PXSRfYv5m7yicgpJgmdrvJgSD1K");

#[program]
pub mod vault {
    use super::*;
}

#[account]
#[derive(InitSpace)]
pub struct JournalEntryState {
    pub owner: Pubkey,

    #[max_len(50)]
    pub title: String,

    #[max_len(100)]
    pub message: String,
}
