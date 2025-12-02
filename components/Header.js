import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    return (
        <header className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white mx-auto flex max-w-screen-xl items-center px-3 py-2.5 2xl:max-w-screen-2xl">
            <Link href={'/'} className="mr-auto text-2xl">
                <span className="text-gradient">Resumave</span>
            </Link>
            <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
      <ThemeToggle />
    </div>
        </header>
    );
};

export default Header;
