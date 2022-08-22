import {useState} from 'react';
import logo from './logo.svg';

function App() {
  const [email, setEmail] = useState('');

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    if (isValidEmail(email)) {
      window.location = `mailto:wacbiz@gmail.com?subject=Notify ${email} - Wacbiz Relaunch!&body=Hi Wacbiz team...`;
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 h-screen flex justify-between flex-col space-between">
      {/* Empty Spacer */}
      <div></div>
      <div className="flex flex-col items-center space-y-10 mx-10">

        {/* Message */}
        <h1 className="text-5xl text-stone-50 mb-2"> Our new website is on its way. </h1>

        {/* Logo */}
        <img src={logo} className="h-48 w-124" alt="logo" />

        {/* Notify Form */}
        <form>
          <p className="text-lg text-stone-50 mb-3">Be the first to know when we launch.</p>
          <div class="relative z-0 mb-6 group">
            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-stone-50 bg-transparent border-0 border-b-2 border-stone-300 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-500 peer" placeholder=" " required 
                  value={email}
                  onChange={handleChange}/>
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <button 
          type="submit" 
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          onClick={handleClick}
          >Notify Me</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="flex mb-5 mx-5 justify-between">
        <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2022 <a href="mailto:wacbiz@gmail.com" class="hover:underline">Wacbiz</a>. All Rights Reserved.
        </span>
        <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">Contact - <a href="mailto:wacbiz@gmail.com" class="hover:underline">wacbiz@gmail.com</a></span>
      </footer>
    </div>
  );
}

export default App;
