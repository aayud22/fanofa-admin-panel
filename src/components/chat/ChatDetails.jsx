import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { APP_ROUTES } from '../../constants/routeConstants';
import {
  Send,
  MoreVertical,
  BadgeCheck,
  OctagonAlert,
  TriangleAlert,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const messages = [
  {
    id: 1,
    date: 'August 21',
    messages: [
      {
        id: 'msg1',
        text: "Hi there! I just wanted to check in and see how you're doing. Let me know if you need any help with the project.",
        time: '10:15 pm',
        isUser: false,
        name: 'Alex',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'msg2',
        text: "Hey Alex! Thanks for checking in. I'm doing well, just finishing up some tasks. How about you?",
        time: '12:15 pm',
        messageId: 'A.Id :267347676',
        isUser: true,
        name: 'Arrora gaur',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'msg3',
        text: "I'm good too! Let me know if you need any assistance with your tasks.",
        time: '12:15 pm',
        isUser: false,
        name: 'Alex',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 2,
    date: 'August 22',
    messages: [
      {
        id: 'msg4',
        text: 'Hey, how are you doing today?',
        time: '09:00 am',
        isUser: true,
        name: 'Arrora gaur',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'msg5',
        text: "I'm doing great, thanks for asking! How about you?",
        time: '09:05 am',
        isUser: false,
        name: 'Alex',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'msg6',
        text: "I'm good too. Just working on some projects.",
        time: '09:10 am',
        isUser: true,
        name: 'Arrora gaur',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 3,
    date: 'August 23',
    messages: [
      {
        id: 'msg7',
        text: 'Did you finish the report?',
        time: '03:00 pm',
        isUser: false,
        name: 'Alex',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'msg8',
        text: 'Yes, I just sent it to you.',
        time: '03:05 pm',
        isUser: true,
        name: 'Arrora gaur',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'msg9',
        text: "Great, I'll review it right away.",
        time: '03:10 pm',
        isUser: false,
        name: 'Alex',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
];

const ChatDetails = () => {
  const dispatch = useDispatch();
  const { chat, user } = useSelector((state) => state);

  const [message, setMessage] = useState('');

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'User', link: APP_ROUTES.USER.USER_LIST },
      { label: 'Users List', link: APP_ROUTES.USER.USER_LIST },
      user?.selectedUser?.name && {
        label: user?.selectedUser?.name,
        link: APP_ROUTES.USER.USER_DETAILS,
      },
      { label: 'Chat' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Users',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!chat?.selectedChatUser) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-500">Select a user to start chatting</p>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-full flex-col -m-6">
      {/* Fixed Header */}
      <div className="flex-none border-b bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={chat?.selectedChatUser?.avatar} />
              <AvatarFallback>{chat?.selectedChatUser?.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-lg font-semibold text-darkBlueText">
                  {chat?.selectedChatUser?.name}
                </h2>
                <BadgeCheck className="fill-neonGreen h-5 w-5 text-white" />
              </div>
              <p className="text-sm font-medium text-darkBlueText">
                {chat?.selectedChatUser?.email}
              </p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <OctagonAlert className="h-4 w-4 text-danger-text" />
                Deactivate User
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TriangleAlert className="h-4 w-4 text-danger-text" />
                Report User
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {messages.map((dateGroup) => (
            <div key={dateGroup.date}>
              <div className="relative mb-4 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 flex-shrink-0 text-sm text-gray-500">
                  {dateGroup.date}
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="space-y-4">
                {dateGroup.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <Avatar className="mr-2 h-8 w-8">
                        <AvatarImage src={message?.avatar} />
                        <AvatarFallback>{message?.name}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex max-w-[70%] flex-col">
                      <div
                        className={`rounded-lg p-[1.95px] ${
                          message.isUser
                            ? 'bg-gradient-to-b from-lightAqua via-coolSky to-deepOcean'
                            : 'bg-skyMist'
                        }`}
                      >
                        <div
                          className={`rounded-lg p-3 text-base font-normal text-darkBlueText ${
                            message.isUser ? 'bg-white' : 'bg-skyMist'
                          }`}
                        >
                          <p>{message.text}</p>
                        </div>
                      </div>
                      <div
                        className={`mt-0.5 flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}
                      >
                        <span className="mt-1 text-xs text-mutedBlue">
                          {message.time}
                          {message.messageId && message.isUser && (
                            <span className="ml-1 text-xs font-bold text-darkBlueText">
                              {message.messageId}
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                    {message.isUser && (
                      <Avatar className="ml-2 h-8 w-8">
                        <AvatarImage src={message?.avatar} />
                        <AvatarFallback>{message?.name}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Input */}
      <div className="flex-none border-t bg-white p-4">
        <div className="flex items-center justify-between gap-2">
          <Input
            value={message}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            className="!focus:outline-none !focus:ring-0 !focus-visible:ring-0 !w-full !border-0 pr-12"
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
