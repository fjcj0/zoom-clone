import { ReactNode } from 'react';
const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <h1 className='text-red-500 font-bold text-3xl'>NavBar</h1>
            {children}
            <h1>Footer</h1>
        </main>
    );
}
export default HomeLayout;
