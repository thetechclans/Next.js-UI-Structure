"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { apiService } from "@/services/api.service";
import { API_PATHS } from "@/services/api-endpoints";
import { Loader2 } from "lucide-react";
import { DCMdl } from "@/models/dqms.model";
import { Notification } from "@/components/ui-components/notification";
import { DataTable } from "@/components/ui-components/data-table";
import { ConfirmDialog } from "@/components/ui/Confirm-Dialog";
import { FormField } from "@/components/ui-components/form-field";
import SearchBox from "@/components/ui-components/search";
import { format } from "util";

function createColumn<T>(
  header: string,
  accessor: keyof T | ((item: T) => React.ReactNode)
) {
  return { header, accessor };
}

export default function DCPage() {
  const [data, setData] = useState([
    // Initial empty data array
    // This will be populated with fetched data
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
      Details_Of_Complaints: " abu thagir",
      Gender: "Suggestion",
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
      Details_Of_Complaints: " abu thagir",
      Gender: "Suggestion",
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
      Details_Of_Complaints: " abu thagir",
      Gender: "Suggestion",
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
      Details_Of_Complaints: " abu thagir",
      Gender: "Suggestion",
      Reference_Number: 123,
      Date_of_Construction: format(new Date("2024-07-15"), "MMM dd yyyy"),
      The_Condition: "active",
    },
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
      Details_Of_Complaints: " abu thagir",
      Gender: "Suggestion",
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
    showPagination: false,
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [search, setSearch] = useState("");

  // const fetchData = async (search: string = "", page: number = 1) => {
  //   setLoading(true);
  //   try {
  //     const queryParams = {
  //       page: page,
  //       search: search.trim(),
  //     };

  //     const { results, count, next, previous } =
  //       await apiService.getAllPaginated<DCMdl>({
  //         endpoint: API_PATHS.DC,
  //         queryParams: queryParams,
  //       });

  //     setData(results || []);
  //     setPagination({
  //       currentPage: page,
  //       pageCount: Math.ceil(count / 10),
  //       hasNext: !!next,
  //       hasPrevious: !!previous,
  //       showPagination: true,
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []); // Fetch data when search or page changes


  console.log(format(new Date("2024-07-15"), "MMM dd yyyy"));

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
    setShowNotification(true);
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, showPagination: false }));
    // fetchData(search, page); // Fetch data with the new page number
  };

  const handleSave = async () => {
    try {
      if (currentItem) {
        await apiService.update<DCMdl>({
          endpoint: API_PATHS.DC,
          body: form,
          queryParams: { id: currentItem.code },
        });
        showNotificationMessage("success", "Updated successfully");
      } else {
        await apiService.create<DCMdl>({
          endpoint: API_PATHS.DC,
          body: form,
        });
        showNotificationMessage("success", "Created successfully");
      }
      setIsDialogOpen(false);
      // fetchData();
    } catch (error) {
      showNotificationMessage("error", "An error occurred while saving.");
    }
  };

  const handleChange = (key: keyof DCMdl, value: any) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
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

  const columns = [
    createColumn<DCMdl>("Details Of Complaints", "Details_Of_Complaints"),
    createColumn<DCMdl>("Gender", "Gender"),
    createColumn<DCMdl>("Reference Number", "Reference_Number"),
    createColumn<DCMdl>("Date of Construction", "Date_of_Construction"),
    createColumn<DCMdl>("The Condition", "The_Condition"),
    // createColumn<DCMdl>("Isbuiltin", "isbuiltin"),
    // createColumn<DCMdl>("Description", "description"),
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Data Catalog</h2>
        <Button
        className="shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => {
            setCurrentItem(null);
            setIsDialogOpen(true);
            setForm({});
          }}
          disabled={loading}
        >
          + Add Status
        </Button>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {!loading && (  
        <>
          <DataTable
            className="border border-gray-300 w-full overflow-hidden"
            data={data}
            columns={columns}
            keyField="code"
            onEdit={(item) => {
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
                    hasNext: pagination.hasNext,
                    hasPrevious: pagination.hasPrevious,
                    onPageChange: handlePageChange,
                  }
                : undefined
            }
          />
        </>
      )}

      {showNotification && (
        <Notification
          type={notificationType}
          title={notificationType}
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl space-y-4 p-4 sm:p-6 max-h-[90vh] rounded-lg overflow-auto hide-scrollbar">
          <DialogTitle className="font-semibold text-lg">
            {currentItem ? "Edit" : "Create"} Data Catalog Item
          </DialogTitle>

          <FormField
            label="Name"
            placeholder="Name"
            value={form.name ?? ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <FormField
            label="Objecttypecode"
            placeholder="Objecttypecode"
            value={form.objecttypecode ?? ""}
            onChange={(e) =>
              handleChange("objecttypecode", Number(e.target.value))
            }
          />

          <FormField
            label="Metadatatypecode"
            placeholder="Metadatatypecode"
            value={form.metadatatypecode ?? ""}
            onChange={(e) =>
              handleChange("metadatatypecode", Number(e.target.value))
            }
          />
          <FormField
            label="Ismultivalue"
            checked={form.ismultivalue ?? false}
            onChange={(e) => handleChange("ismultivalue", e.target.checked)}
            type="checkbox"
          />

          <FormField
            label="Issla"
            checked={form.issla ?? false}
            onChange={(e) => handleChange("issla", e.target.checked)}
            type="checkbox"
          />

          <FormField
            label="Isbuiltin"
            checked={form.isbuiltin ?? false}
            onChange={(e) => handleChange("isbuiltin", e.target.checked)}
            type="checkbox"
          />

          <FormField
            label="Description"
            placeholder="Description"
            value={form.description ?? ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />

          <Button onClick={handleSave}>Save</Button>
        </DialogContent>
      </Dialog> */}

      {/* <ConfirmDialog
        open={isConfirmDialogOpen}
        onConfirm={() => handleDelete(itemToDelete)} // 👈 pass current item code
        onCancel={() => setIsConfirmDialogOpen(false)}
        title="Confirm Delete"
        message="Are you sure you want to delete this item? This action cannot be undone."
      /> */}
    </div>
  );
}
