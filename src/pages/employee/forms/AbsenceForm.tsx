import React from 'react';
import {useForm} from 'react-hook-form';
import Input from '../../../components/input'
import Button from '../../../components/button'; 

function AbsenceForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit(submit)}>
                <Input 
                inputStyle='border-2 border-background'
                label='Date'
                placeholder='Enter date'
                register={register}
                name='date'
                validator={{required: true}}
                type='date'
                />
                {errors.email && <p>Please enter email</p>}

                <label htmlFor="reason">Reason</label> <br/>
                <textarea
                    className='border-2 p-4 border-background rounded-md w-full focus:outline-0'
                    placeholder='Enter your password'
                    {...register?.("reason")}
                    required
                />
                {errors.email && <p>Please enter reason</p>}

                <div className='mt-4 w-4'>
                    <Button width='text-white bg-secondary px-4 py-2 rounded-md'
                        type='submit'
                        label='Request'/>
                </div>
            </form>
        </div>
    );
}

export default AbsenceForm;
