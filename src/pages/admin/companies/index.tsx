import React from 'react'
import Layout from '../../../components/layout';
import Header from '../../../components/header';
import Filter from '../../../components/filter';
import CompanyList from './list';

const CompanyPage = () => {

    return (
        <Layout user={"Admin"} username={"Admin Okolongo"}>
        <div className="bg-background p-4">
          <Header title={"Departments"} />
          <div className="mt-16 mb-10 flex flex-row items-center justify-between">
             <div className="w-[71%]">
              <Filter label1={"All"} label2={"Managers"} label3={"Employees"} total={0} label4={'Department'} />
             </div>
          </div>
          <CompanyList />
        </div>
      </Layout>
    )
}

export default CompanyPage;