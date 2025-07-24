import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
        return;
    } catch (err) {
        console.log("Oops, fail to write data:", err.message);
        return;
    }
};
