'use client';
import React, { useEffect, useState } from 'react';
import BgSideCard from "@/components/ui/bgSideCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Mail, Phone, Gift } from "lucide-react";
import { PaginatedNav } from '@/components/ui-components/pagination';
import { FormField } from '@/components/ui-components/form-field';
import RequestFormModal from '@/components/ui/RequestFormModel';

type ServiceDetailsMdlInf = {
  serviceid: number;
  servicename: string;
  servicedesc: string;
  icon?: React.ReactNode;
  category?: string;
};

export default function AvailablesService() {
  const [services, setServices] = useState<ServiceDetailsMdlInf[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  useEffect(() => {
    // Mock data - replace with your actual data fetching logic
    const mockServices: ServiceDetailsMdlInf[] = [
      {
        serviceid: 1,
        servicename: "Marriage Help",
        servicedesc: "Financial assistance for marriage ceremonies and related expenses.",
      },
      {
        serviceid: 2,
        servicename: "Marriage Help",
        servicedesc: "Scholarships and educational support for beneficiaries.",
      },
      {
        serviceid: 3,
        servicename: "Marriage Help",
        servicedesc: "Support for medical treatments and hospital expenses.",
      },
      {
        serviceid: 4,
        servicename: "Marriage Help",
        servicedesc: "Assistance with housing and accommodation needs.",
      }
    ];
    
    setServices(mockServices);
    setTotalPages(Math.ceil(mockServices.length / 4)); // Assuming 4 items per page
    setLoading(false);
  }, []);

  const handleOpenModal = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <BgSideCard
      title="Available Services"
      className="grid grid-cols-1"
    >
      <div className="flex flex-col gap-6 mt-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : services.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <Label className="text-gray-500">No services available</Label>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <Card 
                key={service.serviceid} 
                className="p-6 bg-white hover:shadow-md transition-shadow border border-gray-100 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.servicename}
                      </h3>
                     
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      {service.servicedesc}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button 
                        onClick={() => handleOpenModal(service.serviceid)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {services.length > 0 && (
          <div className="mt-6 flex justify-center">
            <PaginatedNav
              currentPage={currentPage}
              pageCount={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      <RequestFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceId={selectedServiceId}
      >
        <div className="space-y-4">
          <FormField
            label="Name"
            placeholder="Enter Your Name"
            startIcon={<User className="text-gray-400" />}
          />
          <FormField
            label="Email"
            placeholder="Enter Your Email"
            startIcon={<Mail className="text-gray-400" />}
          />
          <FormField
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            startIcon={<Phone className="text-gray-400" />}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Date"
              type="date"
              startIcon={<Calendar className="text-gray-400" />}
            />
            <FormField
              label="Time"
              type="time"
              startIcon={<Clock className="text-gray-400" />}
            />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Submit Application
            </Button>
          </div>
        </div>
      </RequestFormModal>
    </BgSideCard>
  );
}