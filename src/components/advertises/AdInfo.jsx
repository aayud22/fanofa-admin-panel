import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { AlertCircle, Download, Trash2 } from 'lucide-react';

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="min-w-32 text-sm text-muted-foreground">{label}</span>
      <span className="text-base font-semibold text-darkBlueText">{value}</span>
    </div>
  );
};

const AdInfo = ({ ad, openDeactivateModal, openDeleteModal, useFor = '' }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 ld:flex-row sm:items-center sm:justify-between">
        {/* ID Section */}
        <h1 className="text-lg font-light text-darkBlueText sm:text-xl md:text-2xl">
          {useFor === 'banner' ? 'Banner ID' : 'Ad ID'}{' '}
          <span className="font-bold">{ad.id}</span>
        </h1>

        {/* Buttons Section */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => openDeactivateModal(ad.id)}
          >
            <AlertCircle className="h-4 w-4" />
            <span>Deactivate Ad</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => openDeleteModal(ad.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete Ad</span>
          </Button>
        </div>
      </div>

      {/* Main Image */}
      <div className="h-[200px] sm:h-[273px]">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={
            ad.imageUrl ||
            'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={ad.title || 'Ad Image'}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-6">
        <DetailRow
          label="Price"
          value={
            <span className="text-xl font-bold sm:text-2xl">${'678487'}</span>
          }
        />
        <DetailRow label="Location" value="ul. Zarzecze 58, Kraków 30-134" />
        <DetailRow
          label="Rating"
          value={
            <div className="flex items-center gap-2">
              <span>4</span>
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-muted-foreground">(12)</span>
            </div>
          }
        />
        <DetailRow
          label="Product Comments"
          value={<span className="font-semibold">12</span>}
        />
      </div>

      <div className="p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-darkBlueText sm:text-xl">
          Description
        </h2>
        <p className="text-base font-normal text-darkBlueText">
          {ad.description ||
            "BMW 7 Series is the brand's flagship sedan. It is a comfortable chauffeur-driven car which is great to drive as well. Its USPs include bold looks, business-class-like rear seating, and mind-blowing technology headlined by a cinema-style widescreen dropping down from the roof. But the new design is bound to divide opinions, and its length is also not ideal for crowded cities."}
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <DetailRow
                label="Account Link"
                value={
                  <a
                    href={ad.accountLink || 'http://192.168.20.250:5000/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-blue-600 hover:underline"
                  >
                    {ad.accountLink || 'http://192.168.20.250:5000/'}
                  </a>
                }
              />

              <DetailRow
                label="Category"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.category || 'Car & vehicle'}
                  </span>
                }
              />

              <DetailRow
                label="Sub-Category"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.subCategory || 'Sub-compact SUV'}
                  </span>
                }
              />

              <DetailRow
                label="Sub-Sub-Category"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.subSubCategory || '---'}
                  </span>
                }
              />

              <DetailRow
                label="No. of Views"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.viewedAd || '34245'}
                  </span>
                }
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <DetailRow
                label="Country"
                value={
                  <div className="flex items-center gap-2">
                    <span
                      className={`flag-icon flag-icon-${ad.country?.toLowerCase() || 'us'}`}
                    />
                    <span className="text-base font-semibold text-darkBlueText">
                      {ad.country || 'USA COUNTRY FLAG HERE'}
                    </span>
                  </div>
                }
              />

              <DetailRow
                label="Visitor Time Spent"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.timeSpent || '52 hours 34min'}
                  </span>
                }
              />

              <DetailRow
                label="Total Earning"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    ${ad.totalEarning || '87'}
                  </span>
                }
              />

              <DetailRow
                label="Ad Status"
                value={
                  <Badge
                    variant="success"
                    className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                  >
                    {ad.adStatus || 'ACTIVE'}
                  </Badge>
                }
              />

              <DetailRow
                label="Admin Status"
                value={
                  <Badge
                    variant="success"
                    className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                  >
                    {ad.adminStatus || 'Approved'}
                  </Badge>
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdInfo;
