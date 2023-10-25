import React from "react"
import Input from "../../../components/input"
import SelectInput from "../../../components/select"
import Button from "../../../components/button"

const EditDepartmentForm = () => {

   return (
    <form className="flex flex-col items-start">
        <Input
        type="name"
        name="name"
        label="Name"
        placeholder="Okolongo okolongo"
        inputStyle="border border-primary rounded-[5px] h-8"
      />
      <SelectInput 
         label="Role" 
         placeholder="Employee" 
         name="role" 
         options={[
            {value: 'Okolongo', label: 'Okolongo'},
            {value: 'Manager', label: 'Manager' }
            ]} 
         style="border border-primary rounded-[5px] h-8"   
            />
            <Input
        type="text"
        name="description"
        label="Description"
        placeholder="Description"
        inputStyle="border border-primary rounded-[5px] h-8"
      />
        <div className="flex flex-row gap-2">
            <Button label="Cancel" width="border border-primary text-primary w-[120px] rounded-[5px]"/>
            <Button label="Save changes" width="bg-secondary text-white w-[120px] rounded-[5px]"/>
        </div>
    </form>
   )
}

export default EditDepartmentForm