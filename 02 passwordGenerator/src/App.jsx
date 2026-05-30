import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, SetcharracterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_+{}";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClickBord = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800  ">
      <h1 className="text-white text-center py-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-white "
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClickBord}  
        className="outline-none bg-blue-700  text-white px-3 py-0.5 shrink-0 ">
          Copy
        </button>
      </div>
      <div className=" flex text-sm gap-x-2  ">
        <div className=" flex items-center gap-x-1 ">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />{" "}
          <label htmlFor="numbersinput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              SetcharracterAllowed((prev) => !prev);
            }}
          />{" "}
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
      <h4 className="text-center py-10 text-white">Project completed</h4>
    </div>
  );
};

export default App;
