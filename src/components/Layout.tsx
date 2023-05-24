import { PropsWithChildren } from 'react';

const Layout = ({
  children,
  loggedIn,
  logout,
}: PropsWithChildren<{ loggedIn: boolean; logout(): void }>) => {
  return (
    <div
      className={`bg-yellow-50 h-screen grid ${
        loggedIn ? 'grid-rows-[60px_1fr_50px]' : 'grid-rows-[1fr_50px]'
      }`}
    >
      {loggedIn && (
        <header className='bg-white px-8'>
          <div className='max-w-[900px] mx-auto h-full flex items-center justify-between'>
            <h1 className='font-title text-2xl' test-id='header-title'>
              RemoteReps
            </h1>
            <button
              className='bg-red-500 px-2.5 py-2 text-white font-medium rounded-lg text-sm'
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </header>
      )}
      <div className='px-8 py-12'>
        <div className='max-w-[900px] mx-auto h-full'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
