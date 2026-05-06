// All services will be implemented when backend is ready

export const authService = {
  login: () => Promise.resolve({ user: null, token: null }),
  register: () => Promise.resolve({ user: null, token: null }),
  logout: () => Promise.resolve(),
  me: () => Promise.resolve(null),
}

export const reportService = {}
export const companyService = {}
export const userService = {}
export const leaderboardService = {}
export const categoryService = {}
export const cityService = {}
export const notificationService = {}
export const adminService = {}
