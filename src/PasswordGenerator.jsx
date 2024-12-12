import React, { useState } from "react";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let availableChars = ""; // Start with no characters

    // Add character sets based on user choices
    if (includeUppercase) {
      availableChars += uppercaseChars; // Add uppercase letters
    }
    if (includeLowercase) {
      availableChars += lowercaseChars; // Add lowercase letters
    }
    if (includeNumbers) {
      availableChars += numberChars; // Add numbers
    }
    if (includeSymbols) {
      availableChars += symbolChars; // Add symbols
    }
    

    if (availableChars.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars[randomIndex];
      }
      
    setPassword(generatedPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center w-96" style={{ boxShadow: "10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff" }}>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Password Generator</h1>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-medium mb-1">Password Length:</label>
          <input
            type="number"
            min="4"
            max="64"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2 w-full">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Include Uppercase Letters
          </label>
        </div>

        <div className="mb-2 w-full">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="mr-2"
            />
            Include Lowercase Letters
          </label>
        </div>

        <div className="mb-2 w-full">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
        </div>

        <div className="mb-4 w-full">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Password:</h3>
            <div
              className="w-full p-4 bg-gray-100 rounded-lg shadow-inner text-gray-800 break-words"
              style={{ boxShadow: "inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff" }}
            >
              {password}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
