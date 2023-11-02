import React, {useEffect, useState} from 'react'
import Input from '../../../components/input'
import Button from '../../../components/button'; 
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../../redux/actions/setting';

function EditForm({closeBtn}) {

    const {setting} = useSelector((state) => ({
        setting: state?.setting?.user,
    }));
    const dispatch = useDispatch();
    const [editEmployee, setEditEmployee] = useState({
        name: "",
        email: "",
        profilePicture: "",
        roleId: null,
        departmentId: null,
        phone: "",
        country: "",
        city: "",
        address: "",
        description: "",
        companyUrl: setting.companyUrl || "",

      });
      useEffect(() => {
        if (setting) {
          setEditEmployee({
            name: setting.name || "",
            email: setting.email || "",
            profilePicture: setting.profilePicture || "",
            roleId: setting.roleId || null,
            departmentId: setting.departmentId || null,
            phone: setting.phone || "",
            country: setting.country || "",
            city: setting.city || "",
            address: setting.address || "",
            description: setting.description || "",
            companyUrl: setting.companyUrl || "",

          });
        }
      }, [setting]);
    useEffect(() => {
        dispatch(getUserProfile() as any);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditEmployee((prevData) => ({ ...prevData, [name]: value }));
    }
    
    const submit = (event) => {
        event.preventDefault();
        dispatch(updateUserProfile(editEmployee) as any);
    };

    const handleEditEmployee = (e) => {
        e.preventDefault();
        submit(e);
        closeBtn();
    };

  return (
    <div>
        <form onSubmit={handleEditEmployee}
       >
        <Input
        type="text"
        name="name"
        placeholder="Code of Africa"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={editEmployee.name}
      />
      <Input
        type="email"
        name="email"
        placeholder="coa@gmail.com"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={editEmployee.email}
      />
      <Input
        type="text"
        name="companyUrl"
        placeholder="Website url"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={editEmployee.companyUrl}
      />
      <Input
        type="text"
        name="phone"
        placeholder="+250 791434194"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={editEmployee.phone}
      />
      <Input
        type="text"
        name="country"
        placeholder="Rwanda, Kigali"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={editEmployee.country}
      />
      <Input
        type="text"
        name="city"
        placeholder="Kigali, Kimihurura"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={editEmployee.city}
      />
      <Input
        type="text"
        name="description"
        placeholder="Description"
        inputStyle="border border-primary rounded-[5px] h-8"
        onChange={handleInputChange}
        value={editEmployee.description}
      />
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


