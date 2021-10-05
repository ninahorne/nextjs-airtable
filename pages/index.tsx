import Head from 'next/head';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { FunctionComponent } from 'react';
import { getAllUsers, usersKey } from 'pages/api/airtable/airtable';
import { QueryClient, useQuery, QueryClientProvider } from 'react-query';

interface User {
  name: string;
  userId: string;
  dateCreated: Date;
}

interface HomeProps {
  users: User[];
}


export const Home: FunctionComponent<HomeProps> = ({ users }) => {
  const { data, error, isFetching } = useQuery<User[]>(usersKey, getAllUsers, {
    retry: 3,
  });

  if(error) {
    return (
      <div>
        <h1>No Data</h1>
      </div>
    )
  };

  if(isFetching) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  };
  

  return (
      <div className='container'>
        <Head>
          <title>Next.js Starter!</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <Header title='Welcome to my app!' />
          <p className='description'>
            Get started by editing <code>pages/index.tsx</code>
          </p>
        </main>

        <Footer />
      </div>
  );
};

export default Home;
