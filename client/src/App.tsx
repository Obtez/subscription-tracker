import React from 'react';
import SubscriptionForm from './components/forms/subscription-form/SubscriptionForm';
import './App.css';
import Subscriptions from './pages/subscriptions/Subscriptions';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl p-4">Hello World</h1>
      <SubscriptionForm />
      <Subscriptions />
    </div>
  );
}

export default App;
