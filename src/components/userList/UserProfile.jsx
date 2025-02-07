import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Crown, Pencil } from 'lucide-react';
import SendMessageModal from './modals/SendMessageModal';
import DeleteAccountModal from './modals/DeleteAccountModal';
import DeactivateAccountModal from './modals/DeactivateAccountModal';

const UserProfile = () => {
  const [showSendMsgModal, setSendSendMsgModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);

  const handleDeleteAccount = () => {
    // Handle delete account logic here
    setShowDeleteModal(false);
  };

  const handleDeactivateAccount = () => {
    // Handle deactivate account logic here
    setShowDeactivateModal(false);
  };

  const handleCloseSendMsgModal = () => {
    setSendSendMsgModal(!showSendMsgModal);
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-darkBlueText">
                Arrora gaur
              </h2>
              <Badge
                variant="secondary"
                className="gap-1 !rounded-2xl !bg-brightOrange/[10%] text-base font-medium !text-warmAmber"
              >
                <Crown className="!h-5 !w-5 !text-brightOrange" />
                Business Plus
              </Badge>
            </div>
            <p className="mt-1 text-base font-normal text-darkBlueText">
              Id: 2736426948754845
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSendSendMsgModal(true)}
                className="h-8 text-base font-semibold text-darkBlueText"
              >
                <Pencil className="!h-4 !w-4" />
                Send Message
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 text-base font-semibold text-darkBlueText"
              >
                View Chats
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowDeleteModal(true)}
                className="h-8 text-base font-semibold text-darkBlueText"
              >
                Delete account
              </Button>
              <Button
                size="sm"
                onClick={() => setShowDeactivateModal(true)}
                className="h-8 bg-primary-gradient text-base font-semibold text-white"
              >
                Deactivate account
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteAccountModal
          isOpen={showDeleteModal}
          onConfirm={handleDeleteAccount}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
      {showDeactivateModal && (
        <DeactivateAccountModal
          isOpen={showDeactivateModal}
          onConfirm={handleDeactivateAccount}
          onClose={() => setShowDeactivateModal(false)}
        />
      )}
      {showSendMsgModal && (
        <SendMessageModal
          isOpen={showSendMsgModal}
          onClose={handleCloseSendMsgModal}
        />
      )}
    </>
  );
};

export default UserProfile;
