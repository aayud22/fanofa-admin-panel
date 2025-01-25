import React from 'react';
import { cn } from '../../utils/classNames';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const sources = [
  {
    title: 'Direct Source',
    subtitle: 'Direct link click',
    percentage: 75,
    avatar:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    title: 'Social Network',
    subtitle: 'Social Channels',
    percentage: 85,
    avatar:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    title: 'Referrals',
    subtitle: 'Impact Radius Visit',
    percentage: 85,
    avatar:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    title: 'ADVT',
    subtitle: 'Google Advertisement',
    percentage: 15,
    avatar:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
];

const VisitorSources = () => {
  return (
    <div className="my-3 w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg font-semibold text-darkBlueText">
            Source of Visitor
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6">
            {sources.map((source) => (
              <div
                key={source.title}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    alt={source.title}
                    src={source.avatar}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-darkBlueText">
                      {source.title}
                    </h3>
                    <p className="text-sm font-medium text-mutedBlue">
                      {source.subtitle}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    'text-sm font-medium',
                    source.percentage >= 50 ? 'text-green-500' : 'text-red-500'
                  )}
                >
                  {source.percentage}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorSources;
