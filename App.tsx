import React, { useState, useEffect } from "react";
import Auth from "./screens/auth/Auth";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Auth />;
  }

  return <HomeScreen />;
}
