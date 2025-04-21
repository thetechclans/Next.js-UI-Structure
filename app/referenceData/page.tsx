"use client";

import { useEffect, useState } from "react";
import { ColumnDef, DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { apiService } from "@/services/api.service";
import { API_PATHS } from "@/services/api-endpoints";
import { DQMSQueryParams, DQMSPayload, DQMSModel } from "@/models/dqms.model";
import { Loader2 } from "lucide-react"; // Import the circular loader icon

function createColumn<T>(
  header: string,
  accessor: keyof T | ((item: T) => React.ReactNode)
): ColumnDef<T> {
  return { header, accessor };
}

export default function MemberStatusPage() {
  const [data, setData] = useState<DQMSModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    instancename: "",
    parentname: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DQMSModel | null>(null);

  // Pagination state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageCount: 1,
    hasNext: false,
    hasPrevious: false,
    showPagination: false, // Add this flag to control pagination visibility
  });

  const fetchData = async (page: number = 1) => {
    setLoading(true);
    try {
      const params: DQMSQueryParams = {
        page,
        // masterparentcode: 85566,
        // objecttypecode: 2,
        // iskeytag: false,
        // objectname: "DQMS",
      };

      const { results, count, next, previous } =
        await apiService.getAllPaginated<DQMSModel>({
          endpoint: API_PATHS.DQMS,
          queryParams: params,
        });

      setData(results || []);

      // Update pagination state and show pagination
      setPagination({
        currentPage: page,
        pageCount: Math.ceil(count / 10),
        hasNext: !!next,
        hasPrevious: !!previous,
        showPagination: true, // Set to true after successful API call
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setPagination(prev => ({...prev, showPagination: false})); // Hide pagination during loading
    fetchData(page);
  };

  const handleSave = async () => {
    // Implement your save logic here
    setIsDialogOpen(false);
    fetchData();
  };

  const handleDelete = async (id: number) => {
    // Implement your delete logic here
    fetchData();
  };

  // Then use it like this:
  const columns = [
    createColumn<DQMSModel>("Code", "code"),
    createColumn<DQMSModel>("Instancename", "instancename"),
    createColumn<DQMSModel>("Object Name", "objectname"),
    createColumn<DQMSModel>("Parent Name", (item) => item.parentname || "N/A"),
  ];

  
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Member Status Reference</h2>
        <Button
          onClick={() => {
            setCurrentItem(null);
            setIsDialogOpen(true);
          }}
          disabled={loading} // Disable button during loading
        >
          + Add Status
        </Button>
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {/* Show table only when not loading */}
      {!loading && (
        <>
          <DataTable
            data={data}
            columns={columns}
            keyField="code"
            onEdit={(item) => {
              setCurrentItem(item);
              setForm({
                instancename: item.instancename,
                parentname: item.parentname,
              });
              setIsDialogOpen(true);
            }}
            onDelete={handleDelete}
            pagination={
              pagination.showPagination ? {
                currentPage: pagination.currentPage,
                pageCount: pagination.pageCount,
                hasNext: pagination.hasNext,
                hasPrevious: pagination.hasPrevious,
                onPageChange: handlePageChange,
              } : undefined
            }
          />
        </>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="space-y-4">
          <DialogTitle className="font-semibold text-lg">
            {currentItem ? "Edit" : "Create"} Technical Contact
          </DialogTitle>
          <Input
            placeholder="Technical Contact Email"
            value={form.instancename}
            onChange={(e) => setForm({ ...form, instancename: e.target.value })}
          />
          <Input
            placeholder="Technical Contact Name"
            value={form.parentname}
            onChange={(e) => setForm({ ...form, parentname: e.target.value })}
          />
          <Button onClick={handleSave}>Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}