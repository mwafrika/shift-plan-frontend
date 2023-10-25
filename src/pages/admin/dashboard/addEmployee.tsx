import React from "react"
import Input from "../../../components/input"
import SelectInput from "../../../components/select"
import Button from "../../../components/button"

const AddEmployeeForm = () => {

   return (
    <form className="flex flex-col items-start">
        <Input
        type="name"
        name="fullname"
        label="Fullname"
        placeholder="Okolongo okolongo"
        inputStyle="border border-primary rounded-[5px] h-8"
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="okolongo@gmail.com"
        inputStyle="border border-primary rounded-[5px] h-8"
      />
      <SelectInput 
         label="Role" 
         placeholder="Employee" 
         name="role" 
         options={[
            {value: 'Employee', label: 'Employee'},
            {value: 'Manager', label: 'Manager' }
            ]} 
         style="border border-primary rounded-[5px] h-8"   
            />
        <div className="flex flex-row gap-2">
            <Button label="Cancel" width="border border-primary text-primary w-[100px] rounded-[5px]"/>
            <Button label="Save" width="bg-secondary text-white w-[100px] rounded-[5px]"/>
        </div>
    </form>
   )
}

export default AddEmployeeForm