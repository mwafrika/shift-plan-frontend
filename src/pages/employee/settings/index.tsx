import React, { useEffect, useState } from "react";
import Layout from "../../../layout";
import { FaUser } from "react-icons/fa";
import { editSettings } from "../forms/edit";
import {
  ArrowNarrowRightOutline,
  GlobeAlt,
  Mail,
  Phone,
} from "heroicons-react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../redux/actions/setting";

const SettingPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state?.setting?.user);
  useEffect(() => {
    dispatch(getUserProfile() as any);
  }, [dispatch])
  // console.log("my profile info", userProfile, "my Profile:", userProfile?.name);

  const handleEditForm = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Layout  key={userProfile?.id}  user={userProfile?.role?.name.toUpperCase()} username={userProfile?.name}>
      {isOpened && editSettings({ handleClose: handleEditForm })}

      <div className="flex justify-between p-4 gap-[2rem] bg-background h-[90vh]">
        <div className="flex flex-col items-center gap-[3rem] w-[30%]">
          <div className="flex flex-col items-center bg-secondary/5 rounded-md p-6">
            <div className="bg-secondary p-5 rounded-full">
              <FaUser className="text-white text-[5rem]" />
            </div>
            <h1 className="mt-4">{userProfile?.name}</h1>
          </div>
        </div>

        <div className="bg-secondary/5 rounded-md w-[70%] p-6">
          <div className="flex items-center gap-[20rem]">
            <h1 className=" text-secondary text-lg font-bold">PROFILE</h1>
            <button
              onClick={handleEditForm}
              className="bg-secondary text-white text-sm px-6 py-1 font-bold rounded"
            >
              Edit
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-[4rem]">
            <div className="flex gap-6 ">
              <Mail className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>Email</p>
                <p className="text-secondary">{userProfile?.email}</p>
              </div>
            </div>

            <div className="flex gap-6 ">
              <Phone className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>Phone</p>
                <p className="text-secondary">{userProfile?.phone}</p>
              </div>
            </div>

            <div className="flex gap-6 ">
              <ArrowNarrowRightOutline className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>City & Street</p>
                <p className="text-secondary">{userProfile?.address}</p>
              </div>
            </div>

            <div className="flex gap-6 ">
              <GlobeAlt className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>Country</p>
                <p className="text-secondary">{userProfile?.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingPage;
