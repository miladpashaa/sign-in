import { useState, type FormEvent } from "react";
import { LockIcon, MailIcon } from "./icons";
import googleUrl from "./assets/google.svg";
import appleUrl from "./assets/apple.svg";
import githubUrl from "./assets/github.svg";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_ERROR = "ERR // enter a valid email address";
const PASSWORD_ERROR = "ERR // password must be at least 8 characters";

type FieldErrors = { email?: string; password?: string };
type Status = "idle" | "submitting" | "success";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function clearError(field: keyof FieldErrors) {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const next: FieldErrors = {};
    if (!EMAIL_PATTERN.test(email)) {
      next.email = EMAIL_ERROR;
    }
    if (password.length < 8) {
      next.password = PASSWORD_ERROR;
    }
    setErrors(next);
    if (next.email || next.password) return;

    setStatus("submitting");
    // shortcut: mock auth, no backend behind the form; upgrade when a real API exists
    window.setTimeout(() => setStatus("success"), 800);
  }

  const fieldErrorClass = "text-xs font-bold tracking-wide";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full max-w-md flex-col gap-6 border-2 border-black bg-white p-6"
    >
      {status === "success" && (
        <p
          role="status"
          className="border-2 border-black bg-black px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
        >
          Access granted // {email}
        </p>
      )}

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <div className="flex h-12 items-center gap-2 border-2 border-black px-3 focus-within:ring-2 focus-within:ring-black">
          <MailIcon />
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-black/50"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </div>
        {errors.email && (
          <p className={fieldErrorClass} id="email-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <div className="flex h-12 items-center gap-2 border-2 border-black px-3 focus-within:ring-2 focus-within:ring-black">
          <LockIcon />
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-black/50"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError("password");
            }}
            aria-invalid={errors.password ? true : undefined}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
        </div>
        {errors.password && (
          <p className={fieldErrorClass} id="password-error" role="alert">
            {errors.password}
          </p>
        )}
      </div>

      {/* Remember me & Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="grid h-4 w-4 shrink-0 cursor-pointer appearance-none place-content-center border border-black before:h-2 before:w-2 before:scale-0 before:bg-black before:content-[''] checked:before:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          />
          Remember me
        </label>
        <button type="button" className="text-sm text-[#1c1c1c] hover:underline">
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center bg-[#1c1c1c] text-base font-medium text-[#fcfcfc] hover:bg-[#333] disabled:pointer-events-none disabled:opacity-50"
      >
        {status === "submitting" ? "Signing in…" : "Sign In"}
      </button>

      {/* Social login buttons */}
      <div className="mt-2 flex flex-col gap-3">
        <button
          type="button"
          className="inline-flex h-12 w-full items-center justify-center gap-3 border border-black bg-white hover:bg-neutral-100"
        >
          <img src={googleUrl} alt="" width={20} height={20} />
          Continue with Google
        </button>
        <button
          type="button"
          className="inline-flex h-12 w-full items-center justify-center gap-3 border border-black bg-white hover:bg-neutral-100"
        >
          <img src={appleUrl} alt="" width={20} height={20} />
          Continue with Apple
        </button>
        <button
          type="button"
          className="inline-flex h-12 w-full items-center justify-center gap-3 border border-black bg-white hover:bg-neutral-100"
        >
          <img src={githubUrl} alt="" width={20} height={20} />
          Continue with GitHub
        </button>
      </div>

      {/* Signup */}
      <p className="mt-2 text-center text-sm text-black/45">
        Don’t have an account?{" "}
        <span className="cursor-pointer text-[#1c1c1c] hover:underline">
          Sign Up
        </span>
      </p>
    </form>
  );
}
