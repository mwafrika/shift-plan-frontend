import React from 'react'
import Layout from '../../../components/layout';
import Button from '../../../components/button';
import ShiftList from './list';
const ShiftPage = () => {
    return (
        <Layout user={"Manager"} username={"Manager Okolongo"}>
            <div className='flex items-center justify-end bg-background'>
                <h1 className=' bg-primary text-white px-36 py-2'>Week-1/October</h1>
            </div>
            <div className="bg-background p-4">
            <div className='flex flex-row justify-between items-center my-4'>
                <Button width='bg-secondary text-white px-8 py-2 rounded-[5px] ml-1'
                    type='click'
                    label='Create new shift'
                />
                <Button width='bg-secondary text-white px-8 py-2 rounded-[5px] mr-1'
                    type='click'
                    label='Generate report'
                />
            </div>

            <ShiftList />
            </div>
        </Layout>
    );
};
export default ShiftPage;