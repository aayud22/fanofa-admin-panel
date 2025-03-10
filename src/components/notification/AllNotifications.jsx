import React from 'react';
import { useSelector } from 'react-redux';

const ListOfAllNotification = [
  {
    id: '1',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/5e5c/54b7/915088a1d57155e86ec746dc63c0ed4a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hfq3p24phIqH49CzP2FcvEm3t3iaG06zdQocgoWkyRBWVqyE97Nxr8SyDcbrx-HiHgpfounnoISdeAgZAWP71hXz6jaoWDteUnT0X3dUI0hXa~p0SIj86h6FxKFE3cC82ayk6vFYLwa-Px0MJIGk-s5TAxs5e6z0Dz6IN8CHajVmaJIIaHM0whdfKK7iX5Msb59TDkSrl39C3G~yz5V0EP53Gq7sgL5EkZsati4QBrwFkF693aXcaEfo7zG-Uz4RYGgH84blOVI2dk5aIY2bJbt9UiZHtbOkpHKDZ~jwIvySdQPaybHclO-mVPUYrIm~K3ZBLIvdTgSWktaGs44bpQ__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
  {
    id: '2',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
  {
    id: '3',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
  {
    id: '4',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/5e5c/54b7/915088a1d57155e86ec746dc63c0ed4a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hfq3p24phIqH49CzP2FcvEm3t3iaG06zdQocgoWkyRBWVqyE97Nxr8SyDcbrx-HiHgpfounnoISdeAgZAWP71hXz6jaoWDteUnT0X3dUI0hXa~p0SIj86h6FxKFE3cC82ayk6vFYLwa-Px0MJIGk-s5TAxs5e6z0Dz6IN8CHajVmaJIIaHM0whdfKK7iX5Msb59TDkSrl39C3G~yz5V0EP53Gq7sgL5EkZsati4QBrwFkF693aXcaEfo7zG-Uz4RYGgH84blOVI2dk5aIY2bJbt9UiZHtbOkpHKDZ~jwIvySdQPaybHclO-mVPUYrIm~K3ZBLIvdTgSWktaGs44bpQ__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
  {
    id: '5',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
  {
    id: '6',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/5e5c/54b7/915088a1d57155e86ec746dc63c0ed4a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hfq3p24phIqH49CzP2FcvEm3t3iaG06zdQocgoWkyRBWVqyE97Nxr8SyDcbrx-HiHgpfounnoISdeAgZAWP71hXz6jaoWDteUnT0X3dUI0hXa~p0SIj86h6FxKFE3cC82ayk6vFYLwa-Px0MJIGk-s5TAxs5e6z0Dz6IN8CHajVmaJIIaHM0whdfKK7iX5Msb59TDkSrl39C3G~yz5V0EP53Gq7sgL5EkZsati4QBrwFkF693aXcaEfo7zG-Uz4RYGgH84blOVI2dk5aIY2bJbt9UiZHtbOkpHKDZ~jwIvySdQPaybHclO-mVPUYrIm~K3ZBLIvdTgSWktaGs44bpQ__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
];

const deals = [
  {
    id: '1',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'sent you a deal',
    time: '3 days ago',
    message: 'Hey, I would like to offer $50 for your item.',
  },
  {
    id: '2',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'sent you a deal',
    time: '1 week ago',
    message: 'Is this still available? I can pick it up tomorrow.',
  },
];

const sentRqi = [
  {
    id: '1',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
  {
    id: '2',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/5e5c/54b7/915088a1d57155e86ec746dc63c0ed4a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hfq3p24phIqH49CzP2FcvEm3t3iaG06zdQocgoWkyRBWVqyE97Nxr8SyDcbrx-HiHgpfounnoISdeAgZAWP71hXz6jaoWDteUnT0X3dUI0hXa~p0SIj86h6FxKFE3cC82ayk6vFYLwa-Px0MJIGk-s5TAxs5e6z0Dz6IN8CHajVmaJIIaHM0whdfKK7iX5Msb59TDkSrl39C3G~yz5V0EP53Gq7sgL5EkZsati4QBrwFkF693aXcaEfo7zG-Uz4RYGgH84blOVI2dk5aIY2bJbt9UiZHtbOkpHKDZ~jwIvySdQPaybHclO-mVPUYrIm~K3ZBLIvdTgSWktaGs44bpQ__',
    action: 'wants to collaborate',
    time: '5 days ago',
  },
];

const receivedRqi = [
  {
    id: '1',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/5e5c/54b7/915088a1d57155e86ec746dc63c0ed4a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hfq3p24phIqH49CzP2FcvEm3t3iaG06zdQocgoWkyRBWVqyE97Nxr8SyDcbrx-HiHgpfounnoISdeAgZAWP71hXz6jaoWDteUnT0X3dUI0hXa~p0SIj86h6FxKFE3cC82ayk6vFYLwa-Px0MJIGk-s5TAxs5e6z0Dz6IN8CHajVmaJIIaHM0whdfKK7iX5Msb59TDkSrl39C3G~yz5V0EP53Gq7sgL5EkZsati4QBrwFkF693aXcaEfo7zG-Uz4RYGgH84blOVI2dk5aIY2bJbt9UiZHtbOkpHKDZ~jwIvySdQPaybHclO-mVPUYrIm~K3ZBLIvdTgSWktaGs44bpQ__',
    action: 'wants to collaborate',
    time: '2 days ago',
  },
  {
    id: '2',
    name: 'Brian Griffin',
    avatar:
      'https://s3-alpha-sig.figma.com/img/9583/73f7/99af57ad9bd7888c048f15e7de21c096?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbYTQfnFpyExGpfTHFbOD2Ao4N-MSUHWjLh-dvWyIpYSvnPxbgtoCeWEnGrlWdoPY9NHO0dpAOU10DR2alGCTfm8-zt~KAhFQjTgPNq4heutDDFfU0tXRq7OxT-Or9LIUP9THRNQy-ndkC6YeRVe7ZHkoXWODkhB45f-kXvdN-C7YQqrltiGy4vlsYSZOlO5rzvr3HC0Ooo2-rnHomoRM3hEoI3Xk3D~kRdedRRf~vvkJh8yFtMEa3DpeeV5EXICVz0bsg~dYze0H0kBPnwLGemcMyO1WiKDqsg7bopISTnVo-Bp2-O7Yqlci4eFEibH-G-m~tcNx8VeChEnPY1lw__',
    action: 'wants to collaborate',
    time: '1 week ago',
  },
];

const AllNotifications = ({ activeTab, activeRqiTab }) => {
  const { notifications } = useSelector((state) => state);

  let displayNotifications = [];

  if (activeTab === 'all') {
    displayNotifications = ListOfAllNotification;
  } else if (activeTab === 'deals') {
    displayNotifications = deals;
  } else if (activeTab === 'rqi') {
    displayNotifications = activeRqiTab === 'sent' ? sentRqi : receivedRqi;
  }

  if (displayNotifications?.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        No notifications found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {displayNotifications?.map((notification) => (
        <div key={notification.id} className="flex gap-4">
          <div className="flex-shrink-0">
            <img
              alt={notification.name}
              className="h-10 w-10 rounded-full"
              src={notification.avatar || '/placeholder.svg'}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold">{notification.name}</span>
                <span className="text-gray-600">{notification.action}</span>
              </div>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNotifications;
