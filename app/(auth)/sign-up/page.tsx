"use client"
import { CountrySelectField } from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/inputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from '@/lib/constants';
import { error } from 'console';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignUp = () => {

    const {register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm<SignUpFormData>({
        defaultValues: {
        
        fullName: '',
        email: '',
        password: '',
        country: 'NG',
        investmentGoals: 'Growth',
        riskTolerance: 'Medium',
        preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    }, );
    async function onSubmit(data: SignUpFormData) {
        try {
            
        } catch (e) {
            console.error(e);
        }
    }

  return (
    <div className=''>
        <h1 className="form-title">Sign Up & Personalize</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 '>

           <InputField 
           name="fullName"
           label="Fullname"
           placeholder="Victor Eze"
           register={register}
           error={errors.fullName}
           validation={{requied: "Fullname is Required", minLenght:2}}
           
           />
            <InputField 
           name="email"
           label="Email"
           placeholder="Vceeeze11@gmail.com"
           register={register}
           error={errors.fullName}
           validation={{requied: "Email Address is Required", pattern: /^\w+@\w+\.\w+$/}}
           
           />
            <InputField 
           name="password"
           label="Password"
           placeholder="Victor Eze"
           type= "Password"
           register={register}
           error={errors.password       }
           validation={{requied: "Fullname is Required", minLenght:8}}
           
           />

           {/* COUNTRY */}

           <CountrySelectField 
           name="country"
           label="Country"
           control={control}
           error={errors.country}
           required 
            />

           <SelectField 
             name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goals"
            options={INVESTMENT_GOALS}
            control={control}
            error={errors.investmentGoals}
            required

           />

            <SelectField 
             name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your risk tolerance"
            options={RISK_TOLERANCE_OPTIONS}
            control={control}
            error={errors.riskTolerance}
            required

           />

            <SelectField 
             name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your preferred industry"
            options={PREFERRED_INDUSTRIES}
            control={control}
            error={errors.preferredIndustry}
            required
           />

          

            <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                {isSubmitting ? "Creating Account" : "Start Your Investment Journey"}
            </Button>

        <FooterLink 
         text="Already have an account?" 
         linkText="Sign In"
         href="/sign-in"
        />

        </form>
    </div>
  )
}
 
export default SignUp