import { useUser } from '@auth0/nextjs-auth0';
import HomePage from '../components/HomePage'
import {AiOutlineLoading} from 'react-icons/ai'

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div>
      {/* {isLoading && <p style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 100,
        fontWeight: 600,
      }}>Loading...</p>} */}

      {isLoading && <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}><AiOutlineLoading size={50} /></div>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      {!isLoading && !error && !user && (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
}
