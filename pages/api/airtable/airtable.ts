import Airtable from 'airtable';

interface User {
  name: string;
  userId: string;
  dateCreated: Date;
}

export const usersKey = 'Users';
export async function getAllUsers(apiKey: string, baseId: string): Promise<User[]> {
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
