import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Eye, Heart, MoreVertical, Star } from 'lucide-react';

const interests = [
  { label: 'Cars & Vehicles' },
  { label: 'Buy & Sell' },
  { label: 'Real Estate' },
  { label: 'Jobs' },
];

const ads = Array(8).fill({
  title: 'Iphone 14 Pro Max',
  price: 'Rs 600,000',
  color: 'Blue',
  likes: 219,
  views: 219,
  rating: 4,
  reviews: 32,
});

const AdsGeneralDetails = () => {
  return (
    <div className="mt-5 grid gap-6 !px-0 py-4 lg:grid-cols-2">
      {/* General Information */}
      <Card className="bg-frostBlue">
        <CardHeader>
          <h2 className="text-2xl font-bold text-darkBlueText">
            General Information
          </h2>
        </CardHeader>
        <CardContent className="space-y-4 !px-4">
          {/* Interests */}
          <Card>
            <CardContent className="!p-3 pt-0">
              <h3 className="text-xs font-semibold text-mutedBlue">
                Interests
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4">
                {interests?.map((interest, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 rounded-xl p-2 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full">
                      <img
                        width={100}
                        height={100}
                        alt={interest.label}
                        className="h-full w-full rounded-full"
                        src="https://s3-alpha-sig.figma.com/img/4d8f/e3a1/65de9b2f156b6f3aa4f18424553e55f1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eeSrq3RQ9W3kINu7QhQf7b9YYeHGSju14yC8h0zQKwy~ao1IdN22di6wCcDk1iwzVg0bjbaxZ3-iW~JvPvR2XcfN5WMMeMCzE8Vb7gB3~nHr2twgp--FvaUQCr38~k1962VF6J2ROE986mCqnhz0XyjVYhUxtXgxbN-gwnuOwLWHSBowedxdexsfDb5kcbQcDP0gPgAxOzaKIm9DOgHWouJyWS9AvLHa74uCTGS83mZts-HcaqtWuhAC8MPSDRsBadS5VlhPquhxnk4ihpoYmec1~PvEMShzIQeGiLf7fjngbThOOzJZpNW5IyV9xap-QfVK5nLBHvDf1ByTFCHM5Q__"
                      />
                    </div>
                    <span className="text-darkD text-sm font-medium">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Locations */}
          <Card>
            <CardContent className="!p-3 pt-0">
              <h2 className="mb-1 text-xs font-semibold text-mutedBlue">
                Locations
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-semibold text-darkBlueText">Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">State</p>
                  <p className="font-semibold text-darkBlueText">Alberta</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-semibold text-darkBlueText">Canada</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Postal-Code</p>
                  <p className="font-semibold text-darkBlueText">T1W - T4B</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Card className="rounded-2xl bg-white p-6">
              <p className="mb-1 text-mutedBlue">Ad Posted</p>
              <p className="text-2xl font-bold text-darkBlueText">17</p>
            </Card>
            <Card className="rounded-2xl bg-white p-6">
              <p className="mb-1 text-mutedBlue">Languages</p>
              <p className="text-2xl font-bold text-darkBlueText">English</p>
            </Card>
            <Card className="rounded-2xl bg-white p-6">
              <p className="mb-1 text-mutedBlue">Gender</p>
              <p className="text-2xl font-bold text-darkBlueText">Male</p>
            </Card>
            <Card className="rounded-2xl bg-white p-6">
              <p className="mb-1 text-mutedBlue">Age Range</p>
              <p className="text-2xl font-bold text-darkBlueText">20-40</p>
            </Card>
            <Card className="rounded-2xl bg-white p-6">
              <p className="mb-1 text-mutedBlue">Subscribers</p>
              <p className="text-2xl font-bold text-darkBlueText">9.7k</p>
            </Card>
            <Card className="rounded-2xl bg-white p-6">
              <p className="mb-1 text-mutedBlue">Account Subscribes</p>
              <p className="text-2xl font-bold text-darkBlueText">9.7k</p>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Ads Posted */}
      <Card className="flex h-[587px] flex-col bg-frostBlue">
        <CardHeader className="flex flex-shrink-0 flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-darkBlueText">
            Ads Posted <span className="text-lg">(08 Ads)</span>
          </h2>
        </CardHeader>
        <CardContent className="flex-1 space-y-4 overflow-y-auto">
          {ads.map((ad, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="flex gap-4 p-4">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    fill
                    alt={ad.title}
                    className="h-full w-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/0b40/f6f3/981fc68f2fda25392cf93394ab8e5c0e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uFj2npKleqfTFhhEGOXBCq2y0DkbDcypxtgEbSrYNFcRWUNE31qc5fWwuB-UAjYVP3OFsa~lc~pcw9ACqqLkJxQPWZZmMsW9XUB7JU~rqwI-9Z9NW5lXJyietFkj~sWWkIz0hFlGnsGRIeVHoYZ2~cVYFha6iog7-F4vZ15RhDN1h8qaHBzAK8ApFDzXoNXC~0lZqhCIdI5ejiea-mmfGrt80U5X6LWuLZNS7UUHEwtdoo~wGa-nffKtpI3nRUPFmjTgETgqZbg5RQ5Q7qShPMYCQBuo9OBqpKdaTjqWtCfDisA-r~iepHqVYMKkeaUGgCuRB7GpNRcVZj~supV0HQ__"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkBlueText">
                        {ad.title}
                      </h3>
                      <p className="text-lg font-bold text-darkBlueText">
                        {ad.price}{' '}
                        <span className="text-sm font-normal text-mutedBlue">
                          Color: {ad.color}
                        </span>
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-red-200 p-1">
                        <Heart className="h-4 w-4 fill-crimsonRed text-crimsonRed" />
                      </div>
                      <span className="text-sm">{ad.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-deepOcean/[10%] p-1">
                        <Eye className="h-4 w-4 text-deepOcean" />
                      </div>
                      <span className="text-sm">{ad.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-goldenAmber/[10%] p-1">
                        <Star className="h-4 w-4 fill-goldenAmber text-goldenAmber" />
                      </div>
                      <span className="text-sm">{ad.rating}</span>
                      <span className="text-sm text-mutedBlue">
                        ({ad.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdsGeneralDetails;
