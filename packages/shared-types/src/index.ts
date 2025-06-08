// Shared types for API contracts between frontend and backend

// API Request DTOs
export interface CreateUserDto {
  email: string
  password: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface UpdateProfileDto {
  email?: string
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Authentication Types
export interface AuthTokens {
  accessToken: string
  refreshToken?: string
}

export interface AuthUser {
  id: string
  email: string
}

// User Response (for API)
export interface UserResponse {
  id: string
  email: string
  createdAt: string // ISO string
  updatedAt: string // ISO string
}
