import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRole } from '../../redux/slices/commonSlice';
import { APP_ROUTES } from '../../constants/routeConstants';

const SelectUserType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectRole = (role, route) => {
    dispatch(setRole(role));
    navigate(route);
  };

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-login-bg bg-cover bg-center p-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-bold text-deepBlue md:text-3xl">
            Select User Type
          </h2>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
            {/* Super Admin Card */}
            <div className="cursor-pointer rounded border p-6 transition-shadow hover:shadow-lg">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-semibold">
                  Super Admin
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Access all administrative features and manage system settings
                </p>
                <button
                  onClick={() =>
                    handleSelectRole(
                      'super_admin',
                      APP_ROUTES?.LOGIN?.SUPER_ADMIN
                    )
                  }
                  className="w-full rounded bg-skyBlue py-2 text-white hover:bg-oceanBlue"
                >
                  Continue as Super Admin
                </button>
              </div>
            </div>

            {/* Sub Admin Card */}
            <div className="cursor-pointer rounded border p-6 transition-shadow hover:shadow-lg">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-semibold">Sub Admin</h3>
                <p className="text-center text-sm text-gray-600">
                  Manage specific areas and perform designated administrative
                  tasks
                </p>
                <button
                  onClick={() =>
                    handleSelectRole('sub_admin', APP_ROUTES?.LOGIN?.SUB_ADMIN)
                  }
                  className="w-full rounded bg-skyBlue py-2 text-white hover:bg-oceanBlue"
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
