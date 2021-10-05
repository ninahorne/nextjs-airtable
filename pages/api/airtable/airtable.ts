import Airtable from 'airtable';
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from 'secrets/secrets';

interface User {
  name: string;
  userId: string;
  dateCreated: Date;
}

export const usersKey = 'Users';
export async function getAllUsers(): Promise<User[]> {

  const apiKey: string = AIRTABLE_API_KEY || process.env.AIRTABLE_API_KEY || '';
  const baseId: string = AIRTABLE_BASE_ID || process.env.AIRTABLE_BASE_ID || '';

  const airtable = new Airtable({
    apiKey
  });

  const rawRecords = await airtable
    .base(baseId)('Users')
    .select({
      fields: ['Name', 'UserId', 'DateCreated'],
    })
    .all();

  if (!rawRecords) return Promise.resolve([]);

  const records: any = Array.from(rawRecords).map((record) => {
    const user = {} as User;
    user.name = record.get('Name')?.toString() || '';
    user.userId = record.get('UserId')?.toString() || '';
    user.dateCreated =
      new Date(Date.parse(record.get('DateCreated')?.toString() || '')) ||
      Date.parse('');

    return user;
  });
  console.log(records);

  return Promise.resolve(records);
}
