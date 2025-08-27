'use client'
import Link from 'next/link'
import LoginForm from './LoginForm'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      {/* Left Panel */}
      <div className="bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome Back!</h1>
      </div>

      {/* Right Panel - Form */}
      <div className="flex flex-col items-center gap-7 py-10 px-3">
        {/* Header */}
        <div className="mt-auto flex flex-col items-center gap-3 w-full sm:w-3/5">
          <div className="p-3 bg-gray-50 border border-gray-100 rounded-full">
            <AcUnitIcon fontSize="large" className="text-blue-500" />
          </div>
          <h2 className="text-2xl">Hello Again!</h2>
          <p className="text-gray-400 text-center">
            volutpat, arcu at vehicula gravida, nibh odio viverra est, non
            facilisis libero erat eget nisl
          </p>
        </div>

        {/* Form */}
        <LoginForm />

        {/* Footer */}
        <div className="flex items-center gap-2 mt-auto">
          <p>Don&apos;t have account yet?</p>
          <Link href="/register" className="text-blue-500 font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
