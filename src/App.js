import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Login = lazy(() => import('./pages/login'))
const Register = lazy(() => import('./pages/register'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Suspense>
    </Router>
  )
}

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col items-center justify-center">
      <div className="animate-bounce">
        <img src="/logo.png" className="w-auto h-20" alt="" />
      </div>

      <div className="mt-5 text-gray-500">Halaman sedang dimuat ...</div>
    </div>
  )
}