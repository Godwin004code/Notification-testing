
import React, {useEffect} from 'react'
import OneSignal from 'react-onesignal';

const App = () => {
  useEffect(() => {
    OneSignal.init({
      appId: "efc3fa0b-b0ce-4f76-b2dd-0a84248f5f47"
    });
  }, []);
  return (
    <h2>App</h2>
  )
}

export default App