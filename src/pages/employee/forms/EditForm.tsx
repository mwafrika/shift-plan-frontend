import React from 'react'
import {useForm} from 'react-hook-form';
import Input from '../../../components/input'
import Button from '../../../components/button'; 


function EditForm({closeBtn}) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submit = (data: any) => {
        console.log(data);
        reset();
    };
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}
       >
                <Input 
                inputStyle='py-0'
                    label='First name'
                    placeholder='your name'
                    register={register}
                    name='First name'
                    validator={{required: true}}
                    type='text'
                />
                {errors.email && <p className='text-[0.7rem] text-red'>Please enter first name</p>}

                <Input 
                inputStyle='py-0'
                label='Last name'
                placeholder='Enter your Last name'
                register={register}
                name='Last name'
                validator={{required: true}}
                type='text'
                />
                {errors.email && <p className='text-[0.7rem] text-red'>Please enter Last name</p>}

                <Input 
                label='Picture'
                placeholder='Upload Your picture'
                register={register}
                name='picture'
                validator={{required: true}}
                type='file'
                />
                {errors.email && <p className='text-[0.7rem] text-red'>Please enter Last name</p>}

                <Input 
                inputStyle='py-0'
                label='Email'
                placeholder='Enter your email'
                register={register}
                name='email'
                validator={{required: true, pattern: /^\S+@\S+$/i  }}
                type='email'
                />
                {errors.email && <p className='text-[0.7rem] text-red'>PLease upload a picture</p>}

                <Input 
                inputStyle='py-0'
                label='Telephone'
                placeholder='Enter your Telephone'
                register={register}
                name='telephone'
                validator={{required: true}}
                type='number'
                />
                {errors.telephone && <p className='text-[0.7rem] text-red'>PLease enter telephone</p>}

                <Input 
                inputStyle='py-0'
                label='Country and province'
                placeholder='Enter your Country and province'
                register={register}
                name='Country and province'
                validator={{required: true}}
                type='text'
                />
                {errors.Country  && <p className='text-[0.7rem] text-red'>PLease enter Country</p>}

                <div className='flex justify-start items-start gap-2' >
                    <Button width=' border px-4 bg-white rounded-md m-0'
                        type='click'
                        label='Cancel'
                        onClick={closeBtn}/>

                    <Button width='text-white px-4 bg-secondary rounded-md m-0'
                    type='submit'
                    label='Save'/>
                </div>                
            </form>
        </div>
  )
}

export default EditForm