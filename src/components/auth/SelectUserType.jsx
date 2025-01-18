import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/appRoutes';

const SelectUserType = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-login-bg flex min-h-screen flex-1 items-center justify-center bg-cover bg-center p-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <div className="space-y-6">
          <h2 className="text-primary text-center text-2xl font-bold md:text-3xl">
            Select User Type
          </h2>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
            <div className="cursor-pointer rounded border p-6 transition-shadow hover:shadow-lg">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-semibold">
                  Super Admin
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Access all administrative features and manage system settings
                </p>
                <button
                  onClick={() => navigate(APP_ROUTES?.LOGIN?.SUPER_ADMIN)}
                  className="bg-secondary hover:bg-secondaryHover w-full rounded py-2 text-white"
                >
                  Continue as Super Admin
                </button>
              </div>
            </div>

            <div className="cursor-pointer rounded border p-6 transition-shadow hover:shadow-lg">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-semibold">Sub Admin</h3>
                <p className="text-center text-sm text-gray-600">
                  Manage specific areas and perform designated administrative
                  tasks
                </p>
                <button
                  onClick={() => navigate(APP_ROUTES?.LOGIN?.SUB_ADMIN)}
                  className="bg-secondary hover:bg-secondaryHover w-full rounded py-2 text-white"
                >
                  Continue as Sub Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUserType;
