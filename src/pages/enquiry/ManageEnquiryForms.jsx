import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from '../../components/ui/tabs';
import { Download } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import ContactForm from '../../components/enquiry/ContactForm';
import DisputeForm from '../../components/enquiry/DisputeForm';
import SupportForm from '../../components/enquiry/SupportForm';
import ComplaintForm from '../../components/enquiry/ComplaintForm';
import AdReportsForm from '../../components/enquiry/AdReportsForm';
import AdvertisingForm from '../../components/enquiry/AdvertisingForm';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const ManageEnquiryForms = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('contact-us');

  useEffect(() => {
    const tabLabels = {
      'contact-us': 'Contact Us',
      dispute: 'Dispute',
      complaint: 'Complaints',
      'ad-reports': 'Ad Reports',
      support: 'Support',
      advertising: 'Advertising',
    };

    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Form', link: '#' },
      { label: 'Manage Enquiry', link: '#' },
      { label: tabLabels[activeTab] || 'Manage Enquiry' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Enquiry',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, activeTab]);

  return (
    <div className="mx-auto w-full max-w-[1200px] p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-deepIndigo">Manage Form</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button size="sm" className="!bg-primary-gradient">
            Add New
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="custom-tabs h-auto w-max justify-start">
          <TabsTrigger value="contact-us">Contact Us</TabsTrigger>
          <TabsTrigger value="dispute">Dispute</TabsTrigger>
          <TabsTrigger value="complaint">Complaint</TabsTrigger>
          <TabsTrigger value="ad-reports">Ad Reports</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
        </TabsList>

        <style jsx global>{`
          .custom-tabs [data-state='active'] {
            background: linear-gradient(180deg, #3eb1e0 0%, #0e77cc 100%);
            color: white;
          }
        `}</style>

        <TabsContent value="contact-us">
          <ContactForm />
        </TabsContent>
        <TabsContent value="dispute">
          <DisputeForm />
        </TabsContent>
        <TabsContent value="complaint">
          <ComplaintForm />
        </TabsContent>
        <TabsContent value="ad-reports">
          <AdReportsForm />
        </TabsContent>
        <TabsContent value="support">
          <SupportForm />
        </TabsContent>
        <TabsContent value="advertising">
          <AdvertisingForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageEnquiryForms;
