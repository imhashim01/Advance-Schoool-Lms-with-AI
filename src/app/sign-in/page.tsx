"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

// Mock user database
const mockUsers = [
  { username: "admin", password: "admin123", role: "admin", email: "admin@school.com" },
  { username: "teacher1", password: "teacher123", role: "teacher", email: "teacher@school.com" },
  { username: "student1", password: "student123", role: "student", email: "student@school.com" },
  { username: "parent1", password: "parent123", role: "parent", email: "parent@school.com" },
];

const signInSchema = z.object({
  username: z.string().min(1, { message: "Username is required!" }),
  password: z.string().min(1, { message: "Password is required!" }),
  role: z.enum(["admin", "teacher", "student", "parent"], { message: "Role is required!" }),
});

const signUpSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters!" }),
  role: z.enum(["admin", "teacher", "student", "parent"], { message: "Role is required!" }),
});

type SignInInputs = z.infer<typeof signInSchema>;
type SignUpInputs = z.infer<typeof signUpSchema>;

const LoginPage = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const currentSchema = isSignUp ? signUpSchema : signInSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInInputs | SignUpInputs>({
    resolver: zodResolver(currentSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setErrorMessage("");
    setSuccessMessage("");

    if (isSignUp) {
      // Handle Sign Up
      const signUpData = data as SignUpInputs;
      const existingUser = mockUsers.find(user => user.username === signUpData.username || user.email === signUpData.email);
      if (existingUser) {
        setErrorMessage("Username or email already exists!");
        return;
      }

      // Add new user to mock database
      mockUsers.push({
        username: signUpData.username,
        password: signUpData.password,
        role: signUpData.role,
        email: signUpData.email,
      });

      setSuccessMessage("Account created successfully! Please sign in.");
      reset();
      setTimeout(() => {
        setIsSignUp(false);
        setSuccessMessage("");
      }, 2000);
    } else {
      // Handle Sign In
      const user = mockUsers.find(
        u => u.username === data.username && 
             u.password === data.password && 
             u.role === data.role
      );

      if (user) {
        // Successful login - store user in localStorage and redirect based on role
        console.log("Login successful:", user);
        localStorage.setItem('user', JSON.stringify({
          username: user.username,
          role: user.role,
          email: user.email
        }));
        const roleRoutes = {
          admin: "/admin",
          teacher: "/teacher",
          student: "/student",
          parent: "/parent"
        };
        router.push(roleRoutes[user.role as keyof typeof roleRoutes] || "/");
      } else {
        setErrorMessage("Invalid username, password, or role!");
      }
    }
  });

  return (
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
      <div className="bg-white p-12 rounded-md shadow-md flex flex-col gap-8 w-full md:w-1/3">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="logo" width={72} height={72} />
        </div>
        <h1 className="text-xl font-bold text-center">
          {isSignUp ? "Create your account" : "Login to your account"}
        </h1>
        
        {/* Toggle between Sign In and Sign Up */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setIsSignUp(false);
              setErrorMessage("");
              setSuccessMessage("");
              reset();
            }}
            className={`px-4 py-2 rounded-md transition-colors ${
              !isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(true);
              setErrorMessage("");
              setSuccessMessage("");
              reset();
            }}
            className={`px-4 py-2 rounded-md transition-colors ${
              isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error and Success Messages */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {successMessage}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Role Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Role</label>
            <select
              {...register("role")}
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
            >
              <option value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
            {errors.role?.message && (
              <p className="text-xs text-red-400">{errors.role.message}</p>
            )}
          </div>

          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              {...register("username")}
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
              placeholder="Enter your username"
            />
            {errors.username?.message && (
              <p className="text-xs text-red-400">{errors.username.message}</p>
            )}
          </div>

          {/* Email - only for Sign Up */}
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
                placeholder="Enter your email"
              />
              {(errors as any).email?.message && (
                <p className="text-xs text-red-400">{(errors as any).email.message}</p>
              )}
            </div>
          )}

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
              placeholder="Enter your password"
            />
            {errors.password?.message && (
              <p className="text-xs text-red-400">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="text-xs text-gray-500 mt-4">
          <p className="font-semibold mb-2">Demo Credentials (auto-redirects to role dashboard):</p>
          <p>Admin: admin / admin123 → /admin</p>
          <p>Teacher: teacher1 / teacher123 → /teacher</p>
          <p>Student: student1 / student123 → /student</p>
          <p>Parent: parent1 / parent123 → /parent</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;