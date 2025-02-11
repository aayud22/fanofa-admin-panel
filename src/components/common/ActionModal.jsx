import React from 'react';
import PropTypes from 'prop-types';
import { OctagonMinus, Trash2, X } from 'lucide-react';

const ActionModal = ({
  isOpen,
  onClose,
  entityType,
  actionType,
  onConfirm,
  reasons = [],
  selectedReason,
  onReasonChange,
}) => {
  const title = `${actionType} ${entityType}`;
  const isDeactivate = actionType === 'Deactivate';

  const getMessage = () => {
    return `Are you sure you want to ${actionType.toLowerCase()} this ${entityType.toLowerCase()}?`;
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
        <div className="relative w-full max-w-md rounded-lg bg-white p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Icon */}
          <div className="mb-1 text-start">
            <div
              className={`h-12 w-12 rounded-full ${isDeactivate ? 'bg-red-100' : 'bg-red-100'} flex items-center justify-center`}
            >
              {actionType === 'Deactivate' ? (
                <OctagonMinus className="h-6 w-6 text-red-600" />
              ) : (
                <Trash2 className="h-6 w-6 text-red-600" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mb-1 text-start">
            <h3 className="mb-1 text-start text-xl font-bold text-darkBlueText">
              {title}
            </h3>
            <p className={`${!isDeactivate ? "mb-2":""} text-start text-[17px] font-normal text-deepTeal opacity-60`}>{getMessage()}</p>
          </div>

          {/* Reason Dropdown for Deactivate */}
          {isDeactivate && (
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Select Reason
              </label>
              <select
                value={selectedReason}
                onChange={(e) => onReasonChange(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a reason</option>
                {reasons.map((reason) => (
                  <option key={reason.value} value={reason.value}>
                    {reason.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={onConfirm}
              className="w-full h-[50px] rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              disabled={isDeactivate && !selectedReason}
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              className="w-full h-[50px] rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

ActionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  entityType: PropTypes.oneOf(['Account', 'Ad']).isRequired,
  actionType: PropTypes.oneOf(['Delete', 'Deactivate']).isRequired,
  onConfirm: PropTypes.func.isRequired,
  reasons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  selectedReason: PropTypes.string,
  onReasonChange: PropTypes.func,
};

export default ActionModal;
