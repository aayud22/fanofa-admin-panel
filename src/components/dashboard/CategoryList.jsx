import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const categories = [
  {
    title: 'Cars & Vehicles',
    image:
      'https://s3-alpha-sig.figma.com/img/35c7/214e/d9e0fbe97542adf64882856a9b2e1b65?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDdq0C3M8YvtVXK1CN292EdqkRPlN3YquWXh9QahmN2RTcfXnuCQGkswByQScwbF-nTRDEN5ntv1XFKvlpGpYXdKInOEjsoV5Lo3xUA-MjeHZwBkDB3ojB5MzqyMx4C-yWSMWeu1122YvXUUC5dqQOlB3iGL6n2-ktLkV-L2lIxvENysV0nr6Eh2smSzKkFwvQhzhxarFzBw9R1syv2POv3SLiAkloTulW~euCv3-EK8W6ejdhtJ8mVt8fv444JgM~UuZEoLL~4hcxzQ0YH8MraHcHH9dFV1vjH2n4h47BP~EY54T9m8a7s-~fwiEX7c0fK2BNIgqDzYW8mzGQv~lQ__',
    href: '/cars-vehicles',
  },
  {
    title: 'Buy & Sell',
    image:
      'https://s3-alpha-sig.figma.com/img/499c/7d40/d46a6e3cb329cd0c5538923766a44b1c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkOhcD~sejAZh~jaUGRK9SfPzj6d0shDXtZV9RZcgFQCQ3VsM-rexYmB5Pw1FRcUcXgIGK8W3VxtlsXxUzvo0T-zOHXfQ5SCmQEDHTCGquJj8SAYrRaL6esE7U6IDpULyWSdr0DYOHF-5Fv3kXmw3YfwtRFTx8FScunIq5xd5AowtZGqvbW3zsk9r0TaGJsuq4Fc~MCTmyuJDAmt~4H0V6JPcbJ8ML0rVOs8vsxAdEvs59842BbUDZ70Xr-KqUPZ0ao-MIJq1dT45fBfWzE2mnS1XTh6DT0MyDbdcacar9SFPGM7IlF0SzFmFYRsjjeB6rGwYaek93n9-ZMp7nxm5A__',
    href: '/buy-sell',
  },
  {
    title: 'Real Estate',
    image:
      'https://s3-alpha-sig.figma.com/img/b6d7/94c9/1953247884365ace8f9158a7154b20f7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iLOdnkPcE2VQP8B1sJ1-BG3k9A4kYu4ui0HYOVQL5XLyXqlT3K2e71lzpK~F2~59upo~huLbHZyqJrsq3o6QN2MxlBjaoJpzbT9rqyXtObB1rcQAfvzQUKS2IHZhxIMPOdli5jeVCzyJPjxoAdTkpmPBeIgabkpA8ZdWcUvRItlGsh26hTt5nSpUzsc1MMyqvon-nssvsNJOjTrKs-myciWrHvxw3P-a3qVByFKy8rUCMNIBJ~m6XxmKAHJqVrsmmYEC33ERdgi4Vc8pSCyIvZhr37SpzYd2BvN6koO9B-f6XzgAjzSxou5XR3PeBIiZfHrWz6INmToBL9xhOHEIxA__',
    href: '/real-estate',
  },
  {
    title: 'Jobs',
    image:
      'https://s3-alpha-sig.figma.com/img/3b17/548b/1661bd92ed0d64a4eeef9646daf323da?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9Shk91NWU0wxyC5m6W2kiyp3Xm5bLeFzod2QdThr0NZa07cufDgEUUmyhPC0MpXzcUYyo~0xwQ0mzv5q7eafh9m~nxbgRZ51-yomptT8GwW1nBZqR34dQn-BhGHOOURBgDSxnjtAr4EoAU6IO~u6-5dPZ~Ng-54seLTsyONwAP1xPonYk--o3Sn5vTl7o-aUKfj4zrzOuCmCLkbGoEVF9NrlxS0SNSKMX-FbSotS8-BG4V8tvP7Kp0I5XAHrtZfD1sopychp19zV~ahPbdLWIRbSUSj-B6SvYskBRoKOfCIHxW3XKc4Y4i8TeTOj7wAx2tCdYcnhoDvzF7uoVVtZA__',
    href: '/jobs',
  },
  {
    title: 'Services',
    image:
      'https://s3-alpha-sig.figma.com/img/b138/e245/7d711aa5115420e15726f55696b5a3ae?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIhJ7im4xX5O9ndCdQuawXKCZpJiReOuhQ8VTeUcyNIbZWHQMWQuCOgFeBYCD~Pbrs3fMNVaLJBs7PYCxuMh7W1jMXMLUEfIC-0pUKUSiLMVW8IzDvzfQnWcPkH4FFi3sklyRownIb4lX5u2TtevMX9uQkc8xH9W1bKydURsOVkxDcDaYw4fdZ0TC2CVzeASrisyjy~fxu0xgiDSZlL7TdiGEMqV6TwJUEUNF-OzeFsWHwVLtXliXuKMTd1QxzWmloLV0NjlkZK3pL64jUJUsLtjnO961BnctyHgMnDA38sAjHvv52frnVXlaR0mWejOeAaWCnnwkLw4bZMQD1P4yg__',
    href: '/services',
  },
  {
    title: 'Community',
    image:
      'https://s3-alpha-sig.figma.com/img/9b9d/1d9b/9d04b3531183d7ee75772acb6af3092b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZXxeaikGgl83~gtn9NWncYE25yFERBaHdTAqjcau2sFr2Ow~G-wIbqyqg0XM-3LNMf~JY0TV0YQTJflWMr6rtI8JIrXcIuIjYwDxfP1kv0aQHPTpFvZ9JGBXa0Yk~NT5rSp2J6oUsH8gsF5b1BXoRz3uBccSA2NvzLGc0-Q00OH8tILeQFDn6PApqgLIsqdDkrfzeTdJbilB-htIuqsaWycW6870InO-MYAQOn8EffWWs4UVv-zi2CHaIdOuOhMO0x64-IwiIxEIqbVzZW6o7SYPkx~Oo9cj0yNzrBRGCvm-I~3ULH15ISLUJKZpQwjadCeEZERI9wANgQLyh7VuQ__',
    href: '/community',
  },
  {
    title: 'Pets',
    image:
      'https://s3-alpha-sig.figma.com/img/b138/e245/7d711aa5115420e15726f55696b5a3ae?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIhJ7im4xX5O9ndCdQuawXKCZpJiReOuhQ8VTeUcyNIbZWHQMWQuCOgFeBYCD~Pbrs3fMNVaLJBs7PYCxuMh7W1jMXMLUEfIC-0pUKUSiLMVW8IzDvzfQnWcPkH4FFi3sklyRownIb4lX5u2TtevMX9uQkc8xH9W1bKydURsOVkxDcDaYw4fdZ0TC2CVzeASrisyjy~fxu0xgiDSZlL7TdiGEMqV6TwJUEUNF-OzeFsWHwVLtXliXuKMTd1QxzWmloLV0NjlkZK3pL64jUJUsLtjnO961BnctyHgMnDA38sAjHvv52frnVXlaR0mWejOeAaWCnnwkLw4bZMQD1P4yg__',
    href: '/pet',
  },
  {
    title: 'Deals / Offers',
    image:
      'https://s3-alpha-sig.figma.com/img/d0ae/54ca/82c1c92c9dc90973619cfcbfe48580e4?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7A32ao5Qqnp7fnmf~wMj5hngz~W3QDYdm3KFLnlH5nL6DxS9PU~A-VOJlWF0Yda9YAsY5ySVXzzk6lnvl-Gu5M9Lcwvrh1O7zStDnxSed9XN~4E7W~AXgOBnUDWqJVCS-PO4G3nFKtPTisXupX-nT7E7CbaVzBmHwmSu9Ob2zKAhjInH5tpt6vxwDdz9V2Qtcuzl0XaHlXBljdVe0jIE8oXk3k2RDyYjWHP8g--w9V6rht0pE6xExIPIkSYcW~QYKIXjy7uBzpZxZXoluvGGSFkNM~fAokPe~~JQCll~gYsXgZVAp6x13hJ2a5fo2DYdW49NMeN-gTgKkDTAg3GCA__',
    href: '/deals-offers',
  },
];

const CategoryList = () => {
  return (
    <div className="my-3 w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
          <CardTitle className="text-lg font-bold text-deepBlue">
            Listed Categories
          </CardTitle>
          <a href="/view-all" className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </CardHeader>
      </Card>
      <CardContent className="p-0">
        <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 md:flex-wrap md:justify-start">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group flex min-w-[100px] flex-col items-center"
            >
              <div className="mb-2 flex h-[100px] w-[100px] items-center justify-center rounded-2xl">
                <img
                  width={80}
                  height={80}
                  alt={category.title}
                  src={category.image || '/placeholder.svg'}
                  className="h-16 w-16 object-cover transition-transform group-hover:scale-105 rounded-[8px] border-[1px]"
                />
              </div>
              <span className="text-center text-sm font-bold text-deepBlue">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default CategoryList;
