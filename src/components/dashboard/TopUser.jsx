import React from 'react';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../ui/table';
import { Crown } from 'lucide-react';

const users = [
  {
    id: '1',
    name: 'Evans Mayo',
    avatar:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
    year: '2019',
    startDate: '24Jan2019',
    productCat: 'Buy & Sell',
    country: {
      code: 'ZA',
      flag: '🇿🇦',
    },
    noOfAds: 242,
    plan: {
      name: 'Personal Plus',
      type: 'Personal Plus',
    },
  },
  {
    id: '2',
    name: 'Smith Lovell',
    avatar:
      'https://s3-alpha-sig.figma.com/img/73f8/7f85/dc3d4e7b0c4da58a79c59c2c6ef0139a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKwJYoE2sfczDMQ56fthFlft4zC2~raMLAUD0h44mXMQOpIUSc8UndBw9Jmd3VMxx0J9uR3esNV06Aj1jcTx376lc7gh5K1u1TJqd4CO0lQdqF4F91X-DC7BESbncaCSs-JhMZWYG9YcPZ1EMFp08hq9xFAQ3Px7P2AQreiNiv2OWYV2sVPq1ViRSKXrKcjCqr-sITyGeIGv76Wzli1w-mEReRzsmbUtZwPA2bP08eQw3fGDHp5iSqnjx0TOYZAEfNJjowLngg6dl9ToYfORARFhmeKw4pugU6FaKL5cvsi48oIzQUf0OEuIoYy9J-Ls65l~MnA7pRDRsxJC~rsn8w__',
    year: '2020',
    startDate: '24Jan2020',
    productCat: 'Jobs',
    country: {
      code: 'GB',
      flag: 'GB',
    },
    noOfAds: 242,
    plan: {
      name: 'Business',
      type: 'Business',
    },
  },
  {
    id: '3',
    name: 'Jones Brooks',
    avatar:
      'https://s3-alpha-sig.figma.com/img/d12e/6391/4763d9c61b22e0d2d8217e309b622979?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z2en5mUlcFqZGi6WbXPfadbcDbKQn9RHWRGT1VdkdIDqT5Vvxn5aztsrrrqRlO3~qEMuhwzVBSU4yGeAv7edD29zKSW0EzgtPq-FjZ9plX8~oJgMGrq3HBs~arg8~~6c5m-hnQkkj50q5SoQ1sAXI4lxxXfpTOl6tWTagV8BKzsuF~VbBhchD3LgdVpVvxH7wa58Iww1kE5xorNUSd0~y1iIaGaSJed~zfaaT8Q0TVr1OoTKyFioKTlf6pTz-BvKHaNAXx~V4jdKTWCWm4hE5oOFYQvg8UelXyvfi6Uvk98SZwnEcABQOWdZsRT2rBdBqQ4pO10vNfK8JinR3Q6lEw__',
    year: '2021',
    startDate: '24Jan2021',
    productCat: 'Buy & Sell',
    country: {
      code: 'US',
      flag: 'US',
    },
    noOfAds: 242,
    plan: {
      name: 'Business Plus',
      type: 'Business Plus',
    },
  },
  {
    id: '4',
    name: 'Wilson Pipes',
    avatar:
      'https://s3-alpha-sig.figma.com/img/ee32/53f5/ed48996083575e19da24736a20bce846?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkR~96OHAvGsUrCxvNEsgI6BHz6SEaq3IRnhtsj97RBTGkG7xDrdy5hLXCiXZqozpXXwbea3Dj4pjQq932GlTn3vMVz8brdspKqns8FClX1iXZytzWpovX60HO86xWBY4rsgFUFeRX2GzgraEkIXXAlIR0s8IryaHR57k2JZmpxtrwlLYeRXemdFl7VDxJC~etjNo7FXohcuJpiSNjLLTfbus0aePcJeNt5PWmM446RJGjd4HdtK3mkJN7~Dkwc3o580fIQJ7tgqhz3KJOq5kpqRdSr2VXv9ZxS4vaqiGjNvLMA19ve9Y3xW22UawFnNI3TvY2KLu79RDSgZzo688Q__',
    year: '2022',
    startDate: '24Jan2022',
    productCat: 'Buy & Sell',
    country: {
      code: 'AT',
      flag: 'AT',
    },
    noOfAds: 242,
    plan: {
      name: 'Individual',
      type: 'Individual',
    },
  },
];

const TopUser = () => {
  return (
    <div className="shadow-soft-xl rounded-xl bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-darkBlueText">Top User</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Customer
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Start Date
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Product Cat
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Country
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                No. of Ads
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Plan
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="border-transparentOlive bg-transparentOlive rounded-full border-2">
                      <img
                        width={40}
                        height={40}
                        alt={user.name}
                        className="rounded-full"
                        src={user.avatar || '/placeholder.svg'}
                      />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-darkBlueText">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-mutedBlue">
                        {user.year}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-semibold text-darkBlueText">
                  {user.startDate}
                </TableCell>
                <TableCell className="text-xs font-semibold text-darkBlueText">
                  {user.productCat}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span
                      className={`flag-icon flag-icon-${user.country.code.toLowerCase()}`}
                      style={{ fontSize: '1.3rem' }}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-xs font-semibold text-darkBlueText">
                  {user.noOfAds}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-semibold text-darkBlueText">
                      {user.plan.name}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TopUser;
