import './globals.css';
export default function Layout({ children }) {
  return (
   <html lang="en" className="h-full">
      <head>
        <title>Agbiz Lease</title>
      </head>
    <body className="font-sans bg-gray-300 text-black flex flex-col h-screen">
        <nav className="bg-gradient-to-r from-black to-gray-600 shadow">
          <ul className="flex justify-between p-4">
            <li className="flex space-x-4">
              <a className="text-blue-500 hover:text-blue-700">Home</a>
              <a href="https://www.agbizlogic.com/index/#bottom" className="text-blue-500 hover:text-blue-700">Contact us</a>
            </li>
          </ul>
        </nav>
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-black to-gray-600 shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Contributors</h2>
          <div className="space-y-2 text-blue-500">
            <p className="text-lg ">Jacob Hastings</p>
            <p className="text-lg ">Jim Landers</p>
            <p className="text-lg ">Shengsheng Liu</p>
            <p className="text-lg ">Randall Osborn</p>
            <p className="text-lg ">Maxwell Zimmer</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
