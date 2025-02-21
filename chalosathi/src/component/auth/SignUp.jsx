import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignUp
        path="/sign-up"
        routing="path" 
        signInUrl="/sign-in" 
        afterSignUpUrl="/rides"
        appearance={{
          variables: {
            colorPrimary: '#2563eb',
          },
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
            card: 'shadow-lg rounded-lg',
          },
        }}
      />
    </div>
  );
}