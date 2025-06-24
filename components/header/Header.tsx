export const  Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">Seb codes!</div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                </ul>
            </nav>
        </header>
    );
}