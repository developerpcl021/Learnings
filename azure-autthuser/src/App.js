// // App.js
// import React, { useState } from 'react';
// import PromptList from './PromptList';

// function App() {
//   const [prompts, setPrompts] = useState([]);

//   const addPrompt = () => {
//     const newPrompt = {
//       id: Date.now(),
//       content: '',
//       isEditing: true,
//     };

//     setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
//   };

//   const editPrompt = (id, newContent) => {
//     setPrompts((prevPrompts) =>
//       prevPrompts.map((prompt) => {
//         if (prompt.id === id) {
//           return {
//             ...prompt,
//             content: newContent,
//             isEditing: false,
//           };
//         }
//         return prompt;
//       })
//     );
//   };

//   return (
//     <div>
//       <h1>Prompt List</h1>
//       <PromptList prompts={prompts} onAddPrompt={addPrompt} onEditPrompt={editPrompt} />
//     </div>
//   );
// }

// export default App;



import './App.css'
  import { MsalProvider } from '@azure/msal-react';
  import { PublicClientApplication } from '@azure/msal-browser';
  import azureConfig from './authconfig';
  import LoginButton from './Loginbutton';

  const msalInstance = new PublicClientApplication({
    auth: {
      clientId: azureConfig.clientId,
      authority: azureConfig.authority,
      redirectUri: azureConfig.redirectUri,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  });
  // import ParentComponent from "./ParentComponent";


 function App() {

  
   return (
      <MsalProvider instance={msalInstance}>
       <LoginButton/>
      </MsalProvider>

      // <ParentComponent/>
   );
 }
 export default App;