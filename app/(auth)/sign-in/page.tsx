"use client";
import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/inputField';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

const SignIn = () => {


    const {register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm<SignInFormData>({
        defaultValues: {
        email: '',
        password: '',
        },
        mode: 'onBlur'
    }, );
    async function onSubmit(data: SignInFormData) {
        try {
            
        } catch (e) {
            console.error(e);
        }
    }

  return (
    <div>
      <h1 className="form-title">Sign In Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 '>

        <InputField
          name="email"
          label="Email"
          placeholder="Vceeeze11@gmail.com"
          register={register}
          error={errors.email}
          validation={{requied: "Email Address is Required", pattern: /^\w+@\w+\.\w+$/}}
          
        />

        <InputField 
          name="password"
          label="Password"
          placeholder="Victor Eze"
          type= "Password"
          register={register}
          error={errors.password}
          validation={{requied: "Fullname is Required", minLenght:8}}
          
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
            {isSubmitting ? "Signing In" : "Sign In"}
        </Button>

        <FooterLink
         text="Don't have an account?" 
         linkText="Sign Up"
         href="/sign-up"
        />

      </form>
    </div>
  )
}

export default SignIn