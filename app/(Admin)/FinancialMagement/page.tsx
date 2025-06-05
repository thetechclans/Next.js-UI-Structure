"use client";
import React, { JSX, ReactNode, useState } from "react";
import { DCMdl } from "@/models/dqms.model";
import { apiService } from "@/services/api.service";
import { API_PATHS } from "@/services/api-endpoints";
import { Button } from "@/components/ui/button";
import { ChevronDown, Loader2, User } from "lucide-react";
import { DataTable } from "@/components/ui-components/data-table";
import { format } from "date-fns";
import BgSideCard from "@/components/ui/bgSideCard";
import PopModal from "@/components/ui-components/popModal";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/ui-components/form-field";
import { Form } from "@/components/ui-components/form";
import ConfirmPop from "@/components/ui/confirmPopUp";

export default function FinancialManagement(data: any): JSX.Element {
  const [dataState, setData] = useState([
    // Initial empty data array
    // This will be populated with fetched data
   {
         code: 1,
         Details_Of_Complaints: " abu thagir",
         Gender: "male",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-07-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: "Ahamed",
         Gender: "Male",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-07-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: " abu thagir",
         Gender: "Suggestion",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-07-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: " Nilo",
         Gender: "Female",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-07-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: " Majith",
         Gender: "Male",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-08-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: " Rawoof",
         Gender: "male",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-05-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: "jass",
         Gender: "Female",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-02-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: "Dawood",
         Gender: "Male",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-11-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: "Balkis",
         Gender: "Female",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-012-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: " abu thagir",
         Gender: "male",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-09-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
       {
         code: 1,
         Details_Of_Complaints: " someName",
         Gender: "Suggestion",
         Reference_Number: 123,
         Date_of_Construction: format(new Date("2024-06-15"), "MMM dd yyyy"),
         The_Condition: "active",
       },
  ]);
  const [form, setForm] = useState<Partial<DCMdl>>({});
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DCMdl | null>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageCount: 1,
    hasNext: false,
    hasPrevious: false,
    showPagination: true,
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm); // Update the search state
    // fetchData(searchTerm); // Fetch data with the new search term and reset to page 1
  };

  const showNotificationMessage = (
    type: "success" | "error" | "info" | "warning",
    message: string
  ) => {
    setNotificationType(type);
    setNotificationMessage(message);
    setShowNotification(false);
  };

  const handlePageChange = (page: number) => {
    setPagination((prev: any) => ({ ...prev, showPagination: false }));
    // fetchData(search, page); // Fetch data with the new page number
  };



  const handleDelete = async (id: number) => {
    // Implement your delete logic here
    await apiService.deleteItem<DCMdl>({
      endpoint: API_PATHS.DC,
      queryParams: { id },
    });
    setShowNotification(true);
    setNotificationType("success");
    setNotificationMessage("Deleted successfully");
    // fetchData();
  };

  type TableRow = {
    code: number;
    Details_Of_Complaints: string;
    Gender: string;
    Reference_Number: number;
    Date_of_Construction: string;
    The_Condition: string;
  };

  function createColumn<T>(
    header: string,
    accessor: keyof T | ((item: T) => React.ReactNode)
  ) {
    return {
      header,
      accessor,
    };
  }

  const columns = [
    createColumn<TableRow>("Details Of Complaints", "Details_Of_Complaints"),
    createColumn<TableRow>("Gender", "Gender"),
    createColumn<TableRow>("Reference Number", "Reference_Number"),
    createColumn<TableRow>("Date of Construction", "Date_of_Construction"),
    createColumn<TableRow>("The Condition", "The_Condition"),
  ];

  return (
      <BgSideCard
      className="w-full overflow-x-hidden items-center "
      search={true}
      button={true}
      title={"Financial Management"}
    >
      <div className="py-6 space-y-4">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {!loading && (
          <>
            <DataTable
              className="border border-gray-300 w-full overflow-hidden"
              data={dataState}
              columns={columns}
              keyField="code"
              searchbar={false}
              icon={<ChevronDown className="text-gray-200" />}
              onEdit={(item: DCMdl) => {
                setCurrentItem(item);
                setForm(item);
                setIsDialogOpen(true);
              }}
              onDelete={handleDelete}
              onSearch={handleSearch}
              showdropdown={true}
              pagination={
                pagination.showPagination
                  ? {
                      currentPage: pagination.currentPage,
                      pageCount: pagination.pageCount,
                      // hasNext: pagination.hasNext,
                      // hasPrevious: pagination.hasPrevious,
                      onPageChange: handlePageChange,
                    }
                  : undefined
              }
            />
          </>
        )}

        {showNotification && (
          // Replace 'Notification' with your custom notification component import
          // Example: <CustomNotification ... /> if you have such a component
          <div className={`notification notification-${notificationType}`}>
            <strong>{notificationType}</strong>: {notificationMessage}
            <button onClick={() => setShowNotification(false)}>Close</button>
          </div>
        )}
      </div>
      
   {/* <PopModal
          showProfileImage={false}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Member Data"
        >
            <div className="flex items-center space-x-4">
              <User className="h-10 w-10 rounded-full bg-gray-400 p-1 text-white" />
              <div>
                <Label className="text-lg text-gray-800">Ahamed</Label>
                <br />
                <Label className="text-sm text-gray-600">Ahamed23</Label>
              </div>
          </div>
          <Form>
            <div className="grid grid-cols-2 gap-4 w-full my-4">
              <FormField label="Phone Number" placeholder="Enter Your Phone Number" />
              <FormField label="Email" placeholder="Enter Your Email" />
            </div>
          </Form>
          <div className="flex justify-evenly m-4">
            <Button className="bg-white shadow-lg text-black">Cancel</Button>
            <Button className="hover:shadow-lg text-black">Submit</Button>
          </div>
        </PopModal> */}

        {/* <ConfirmPop success>
          <Label className="text-lg">successfully uploaded</Label>
        </ConfirmPop> */}
    </BgSideCard>
  );
}
