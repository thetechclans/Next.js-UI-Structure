'use client';
import React, { useEffect, useState} from 'react';
import BgSideCard from "@/components/ui/bgSideCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SearchBox from '@/components/ui-components/search';
import Spinner from '@/components/ui/spinner';
import { useLocale } from '@/components/locale/locale-provider';
import EmptyState from '@/components/ui/EmptyState';
import RequestFormModal from '@/components/ui/RequestFormModel';
import { PaginatedNav } from '@/components/ui-components/pagination';
import { FormField } from '@/components/ui-components/form-field';
import { Member } from '@/public/svg/financialicon/category';

// Define the ServiceDetailsMdlInf type if not imported from elsewhere
type ServiceDetailsMdlInf = {
  serviceid: number;
  servicename: string;
  servicedesc: string;
  // Add other fields as needed
};

export default function AvailablesService () {
  const [services, setServices] = useState<ServiceDetailsMdlInf[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const locale = useLocale();
  const isRTL = (locale?.language || locale?.code) === 'ar';
  const t = useTranslations('Benificiary');
  const itemsPerPage = 10;

  function useTranslations(namespace: string) {
  // Simple mock translation function for demonstration
  return (key: string) => key;
  }
  
  useEffect(() => {
    const role = localStorage.getItem('Beneficiary');
    // if (String(role) !== "Beneficiary") {
    //   window.location.href = '/';
    // }
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL, locale]);

  const handleOpenModal = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

    function handlePageChange(page: number): void {
        throw new Error('Function not implemented.');
    }

  return (
    <BgSideCard
      title={t('Available Service')}
      className="grid grid-cols-1"
    >
      <div className="flex flex-col gap-6 mt-6">

        {/* {loading ? (
          // <Spinner />
        ) : services.length === 0 ? ( */}
          <EmptyState
            imageSrc="/imgs/empty.png"
            message={t("No services found at the moment")}
            className="min-h-[50vh]"
            imageClass="w-1/2 md:w-1/3 lg:w-1/4"
          />
        {/* ) : ( */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {services.map((service) => (
              <Card key={service.serviceid} className="p-4 my-4">
                <div className="flex justify-between m-2 my-4">
                  <Label className="text-lg text-gray-700">
                    {service.servicename}
                  </Label>
                </div>
                <div>
                  <Label className="text-sm text-gray-400 text-start">
                    {service.servicedesc}
                  </Label>
                </div>
                <div className="flex justify-end mt-4 gap-2">
                  <Button
                    onClick={() => handleOpenModal(service.serviceid)}
                    className="bg-gradient-to-r from-[#3bce8a] to-[#00a75a]"
                  >
                    {t('Submitarequest')}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        {/* )} */}

        {/* Pagination */}
        <div className={`mt-4 w-full flex justify-end ${isRTL ? 'rtl' : 'ltr'}`}>
           <PaginatedNav
             currentPage={currentPage}
             pageCount={totalPages}
             onPageChange={handlePageChange}
           />
        </div>
      </div>

      <RequestFormModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              serviceId={selectedServiceId} children={
                <>
                <FormField
                label='Name'
                placeholder='Enter Your Name'
                />
                <FormField
                label='Email'
                placeholder='Enter Your Email'
                />
                <FormField
                label='PhoneNumber'
                placeholder='Enter Your PhoneNumber'
                />
                </>
              }      />
    </BgSideCard>
  );
}

function useTranslations(arg0: string) {
    throw new Error('Function not implemented.');
}

