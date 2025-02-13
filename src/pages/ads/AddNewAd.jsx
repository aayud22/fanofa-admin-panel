import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { FileDown } from 'lucide-react';

const AddNewAd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      adId: '#987654',
      userId: '#657654',
      userName: '',
      email: '',
      phone: '',
      ageRange: '',
      adTitle: '',
      adDescription: '',
      category: '',
      subCategory: '',
      subSubCategory: '',
      price: '',
      socialMediaLink: '',
      country: '',
      state: '',
      city: '',
      viewers: 'all',
      location: { lat: 40.7128, lng: -74.006 }, // Default to New York
    },
  });

  const [selectedLocation, setSelectedLocation] = useState({
    lat: 40.7128,
    lng: -74.006,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleMapClick = (event) => {
    const newLoc = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedLocation(newLoc);
    setValue('location', newLoc);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-darkBlueText">
          Create New Deal
        </h1>

        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-md border-[1px] border-softPaleBlue text-sm font-semibold text-darkBlueText shadow-soft-2xl"
        >
          <FileDown className="h-5 w-5" />
          Download
        </Button>
      </div>

      <Card className="flex-1 !rounded-none !border-none">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full flex-col"
        >
          <CardContent className="flex-1 space-y-6 overflow-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Read-only IDs */}
              <div className="space-y-2">
                <Label>Ad Id</Label>
                <Input {...register('adId')} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>User Id</Label>
                <Input {...register('userId')} readOnly className="bg-muted" />
              </div>

              {/* User Details */}
              <div className="space-y-2">
                <Label htmlFor="userName">User Name</Label>
                <Input
                  id="userName"
                  {...register('userName', {
                    required: 'Username is required',
                  })}
                />
                {errors.userName && (
                  <p className="text-sm text-red-500">
                    {errors.userName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Id</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Contact & Age */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" {...register('phone')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ageRange">Age Range</Label>
                <Select
                  value={watch('ageRange')}
                  onValueChange={(value) => setValue('ageRange', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20-50">20-50</SelectItem>
                    <SelectItem value="51-70">51-70</SelectItem>
                    <SelectItem value="71+">71+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Ad Details */}
            <div className="space-y-2">
              <Label htmlFor="adTitle">Ad Title</Label>
              <Input
                id="adTitle"
                {...register('adTitle', { required: 'Ad title is required' })}
              />
              {errors.adTitle && (
                <p className="text-sm text-red-500">{errors.adTitle.message}</p>
              )}
            </div>

            {/* Rich Text Description */}
            <div className="mb-4 space-y-2">
              <Label htmlFor="adDescription">Ad Description</Label>
              <div className="quill-container h-[200px]">
                <ReactQuill
                  theme="snow"
                  value={watch('adDescription')}
                  onChange={(content) => setValue('adDescription', content)}
                  className="h-[150px]"
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['clean'],
                    ],
                  }}
                />
              </div>
              {errors.adDescription && (
                <p className="text-sm text-red-500">
                  {errors.adDescription.message}
                </p>
              )}
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Select Category</Label>
                <Select
                  value={watch('category')}
                  onValueChange={(value) => setValue('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="vehicles">Vehicles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subCategory">Select Subcategory</Label>
                <Select
                  value={watch('subCategory')}
                  onValueChange={(value) => setValue('subCategory', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sub-Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phones">Phones</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="tablets">Tablets</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sub-Sub Category and Viewers side by side */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="subSubCategory">
                  Select Sub-Sub Category (if any)
                </Label>
                <Select
                  value={watch('subSubCategory')}
                  onValueChange={(value) => setValue('subSubCategory', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sub-Sub Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iphone">iPhone</SelectItem>
                    <SelectItem value="android">Android</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="viewers">Select Viewers</Label>
                <Select
                  value={watch('viewers')}
                  onValueChange={(value) => setValue('viewers', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select viewers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="registered">Registered Users</SelectItem>
                    <SelectItem value="premium">Premium Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price & Social */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="socialMediaLink">Social Media Link</Label>
                <Input
                  id="socialMediaLink"
                  type="url"
                  {...register('socialMediaLink')}
                  placeholder="http://linkedin.com/company/..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    $
                  </span>
                  <Input
                    id="price"
                    type="number"
                    className="pl-7"
                    {...register('price')}
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Location</h3>

              {/* Google Map */}
              <div className="h-60 w-full rounded-lg border">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerClassName="w-full h-full rounded-lg"
                    center={selectedLocation}
                    zoom={10}
                    onClick={handleMapClick}
                  >
                    <Marker position={selectedLocation} />
                  </GoogleMap>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    Loading map...
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="country">Select Country</Label>
                  <Select
                    value={watch('country')}
                    onValueChange={(value) => setValue('country', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Select State</Label>
                  <Select
                    value={watch('state')}
                    onValueChange={(value) => setValue('state', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Select City</Label>
                  <Select
                    value={watch('city')}
                    onValueChange={(value) => setValue('city', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nyc">New York City</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Add Image</Label>
              <div className="rounded-lg border-2 border-dashed p-6 text-center">
                <input type="file" className="hidden" id="file-upload" />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Drop your file here or select click to Browse File
                </label>
              </div>
            </div>
          </CardContent>

          <CardFooter className="border-t bg-white py-4">
            <div className="ml-auto flex gap-4">
              <Button type="button" variant="outline">
                Save and add Another
              </Button>
              <Button type="submit" className="bg-primary-gradient">
                Add
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddNewAd;
