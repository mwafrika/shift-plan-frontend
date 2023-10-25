import React from 'react'
import Layout from '../../../components/layout';
import Header from '../../../components/header';
import Filter from '../../../components/filter';
import DepartmentList from './list';
import Button from '../../../components/button';
import Dialog from '../../../components/dialog';
import AddDepartmentForm from './addDepartment';

const DepartmentPage = () => {

  const [showForm, setShowForm] = React.useState(false);

    return (
        <Layout user={"Admin"} username={"Admin Okolongo"}>
          {showForm && (
            <Dialog title="Create department" width="w-[30%]">
              <AddDepartmentForm />
            </Dialog>
          )}
        <div className="bg-background p-4">
          <Header title={"Departments"} />
          <div className="mt-16 mb-10 flex flex-row items-center justify-between">
             <div className="w-[71%]">
              <Filter label1={"All"} label2={"Managers"} label3={"Employees"} total={0} label4={'Department'} />
             </div>
             <div>
               <Button 
                  label="Add department" 
                  width="bg-secondary text-white py-2 px-8 shadow-lg"
                  onClick={() => {
                    setShowForm(true);
                  }}
                />
             </div>
          </div>
          <DepartmentList />
        </div>
      </Layout>
    )
}

export default DepartmentPage;