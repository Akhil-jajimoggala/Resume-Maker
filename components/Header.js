import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900 text-black dark:text-white mx-auto flex max-w-screen-xl items-center py-2.5 2xl:max-w-screen-2xl">
            <Link href={'/'} className="mr-auto text-2xl">
                <span className="text-gradient">Resumave</span>
            </Link>
            <div className=" dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
      <ThemeToggle />
    </div>
        </header>
    );
};

export default Header;
