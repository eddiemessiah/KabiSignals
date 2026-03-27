import { login, signup } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const { message } = await searchParams

  return (
    <div className="min-h-screen bg-[#050B14] bg-grid-pattern text-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00E5FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00FF88]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight kabi-gradient-text kabi-glow-cyan">
          KabiSignals
        </h2>
        <p className="mt-2 text-sm text-[#94A3B8]">
          Institutional Intelligence. Direct to You.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="glass-panel py-8 px-4 sm:rounded-2xl sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8]">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-[#1E293B] rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#00E5FF] focus:border-[#00E5FF] sm:text-sm bg-[#050B14] text-white"
                  placeholder="enter.your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#94A3B8]">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-[#1E293B] rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#00E5FF] focus:border-[#00E5FF] sm:text-sm bg-[#050B14] text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {message && (
              <div className="text-sm text-[#FF3366] text-center bg-[#FF3366]/10 py-2 rounded-md border border-[#FF3366]/20">
                {message}
              </div>
            )}

            <div className="flex flex-col gap-4">
              <button
                formAction={login}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-[#050B14] bg-[#00E5FF] hover:bg-[#00C6DD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A1220] focus:ring-[#00E5FF] transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
              >
                Sign In
              </button>
              <button
                formAction={signup}
                className="w-full flex justify-center py-3 px-4 border border-[#1E293B] rounded-lg shadow-sm text-sm font-medium text-white bg-[#0A1220] hover:bg-[#1E293B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A1220] focus:ring-[#1E293B] transition-all"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
