import logo from './logo.svg';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 h-screen flex justify-between flex-col space-between">
      {/* Empty Spacer */}
      <div></div>
      <div className="flex flex-col items-center space-y-10 mx-10">

        {/* Message */}
        <h1 className="text-5xl text-stone-50 mb-2"> Our new website is on its way. </h1>

        {/* Logo */}
        <img src={logo} className="h-48 w-124" alt="logo" />

        {/* Contact Us */}
        <div>
          <p className="text-lg text-stone-50">Share you excitement with us.</p>
          <a href="mailto:wacbiz@gmail.com" className="text-lg text-stone-50 underline">wacbiz@gmail.com →</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex mb-5 mx-5 justify-between">
        <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2022 <a href="mailto:wacbiz@gmail.com" class="hover:underline">Wacbiz</a>. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default App;
