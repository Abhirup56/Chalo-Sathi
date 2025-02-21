import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl="/profile"
      />
    </div>
  );
}