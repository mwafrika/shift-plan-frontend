import React from "react"
import Input from "../../../components/input"
import SelectInput from "../../../components/select"
import Button from "../../../components/button"

const EditCompanyForm = () => {

   return (
    <form className="flex flex-col items-start">
        <Input
        type="name"
        name="name"
        placeholder="Code of Africa"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
      />
      <Input
        type="email"
        name="email"
        placeholder="coa@gmail.com"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
      />
      <Input
        type="url"
        name="url"
        placeholder="Website url"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
      />
      <Input
        type="text"
        name="phone"
        placeholder="+250 791434194"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
      />
      <Input
        type="text"
        name="country"
        placeholder="Rwanda, Kigali"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
      />
      <Input
        type="text"
        name="city"
        placeholder="Kigali, Kimihurura"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
      />
            <Input
        type="text"
        name="description"
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

export default EditCompanyForm