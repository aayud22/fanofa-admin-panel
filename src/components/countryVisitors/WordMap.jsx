import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const countryColors = {
  US: '#4D90FE',
  CN: '#FF5722',
  RU: '#4CAF50',
  SA: '#FF9800',
  FR: '#009688',
};

const markers = [
  { latLng: [37.0902, -95.7129], name: 'USA' },
  { latLng: [35.8617, 104.1954], name: 'China' },
  { latLng: [55.7512, 37.6184], name: 'Russia' },
  { latLng: [48.8566, 2.3522], name: 'France' },
  { latLng: [23.8859, 45.0792], name: 'Saudi Arabia' },
];

const popularCountries = [
  {
    name: 'United States',
    color: 'bg-blue-500',
    percentage: '80%',
    users: 3244,
    flag: 'US',
  },
  {
    name: 'Venezuela',
    color: 'bg-orange-500',
    percentage: '60%',
    users: 3244,
    flag: 'VE',
  },
  {
    name: 'Salvador',
    color: 'bg-yellow-500',
    percentage: '49%',
    users: 3244,
    flag: 'SV',
  },
  {
    name: 'Russia',
    color: 'bg-green-500',
    percentage: '100%',
    users: 3244,
    flag: 'RU',
  },
];

const WorldMap = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft-xl">
      <div className="flex w-full max-w-full flex-col items-start justify-between gap-6 md:flex-row">
        <div className="h-[400px] w-full min-w-[300px] md:w-2/3">
          <VectorMap
            map={worldMill}
            backgroundColor="transparent"
            style={{ height: '100%', width: '100%' }}
            regionStyle={{
              initial: {
                fill: '#E0E0E0',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 1,
              },
              hover: {
                fill: '#FFC107',
                'fill-opacity': 0.8,
              },
            }}
            series={{ regions: [{ values: countryColors, attribute: 'fill' }] }}
            markers={markers}
            markerStyle={{
              initial: {
                fill: '#fff',
                stroke: '#000',
                'stroke-width': 1,
                r: 8,
              },
              hover: { fill: '#FFD700' },
            }}
            onMarkerTipShow={(e, el, index) => {
              el.html(`${el.html()} (${markers[index].name})`);
            }}
          />
        </div>

        <div className="hidden w-[2px] bg-gray-300 md:block"></div>

        <div className="w-full min-w-[280px] p-4 md:w-1/3">
          <Card className="border-none shadow-none">
            <CardHeader className="p-0 pb-2">
              <CardTitle className="text-lg font-semibold text-darkBlueText">
                Popular Countries
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {popularCountries.map((country) => (
                  <div key={country.name} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center">
                      <span
                        className={`flag-icon flag-icon-${country.flag.toLowerCase()} rounded-full`}
                        style={{ fontSize: '1.5rem' }}
                      />
                    </div>
                    <div className="flex w-full flex-col">
                      <h3 className="text-sm font-semibold text-darkBlueText">
                        {country.name}
                      </h3>
                      <p className="text-xs text-mutedBlue">
                        {country.users.toLocaleString()} Users
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200">
                        <div
                          className={`h-2 rounded-full ${country.color}`}
                          style={{ width: country.percentage }}
                        />
                      </div>
                      <span className="text-xs font-medium text-darkBlueText">
                        {country.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
