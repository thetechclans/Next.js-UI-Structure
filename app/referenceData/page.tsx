"use client";

import { useEffect, useState } from "react";
import { MemberStatus } from "@/models/member-status.model";
import { referenceService } from "@/services/reference.service";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MemberStatusPage() {
  const [statuses, setStatuses] = useState<MemberStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const [editStatus, setEditStatus] = useState<MemberStatus | null>(null);
  const [form, setForm] = useState({
    memberstatusdescen: "",
    memberstatusdescar: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpen1, setDialogOpen1] = useState(false);


  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await referenceService.getAll();
      setStatuses(data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    if (editStatus) {
      await referenceService.update(editStatus.memberstatusid.toString(), { ...editStatus, ...form });
    } else {
      await referenceService.create(form as MemberStatus);
    }
    setForm({ memberstatusdescen: "", memberstatusdescar: "" });
    setEditStatus(null);
    setDialogOpen(false);
    setDialogOpen1(false);
    fetchData();
  };

  const handleDelete = async (id: number) => {
    await referenceService.delete(id.toString());
    fetchData();
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Member Status Reference</h2>
        <Dialog open={dialogOpen1} onOpenChange={setDialogOpen1}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditStatus(null);
                setForm({ memberstatusdescen: "", memberstatusdescar: "" });
                setDialogOpen1(true);
              }}
            >
              + Add Status
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-4">
            <DialogTitle className="font-semibold text-lg">
              {editStatus ? "Edit" : "Create"} Member Status
            </DialogTitle>
            <Input
              placeholder="English Description"
              value={form.memberstatusdescen}
              onChange={(e) =>
                setForm({ ...form, memberstatusdescen: e.target.value })
              }
            />
            <Input
              placeholder="Arabic Description"
              value={form.memberstatusdescar}
              onChange={(e) =>
                setForm({ ...form, memberstatusdescar: e.target.value })
              }
            />
            <Button onClick={handleSave}>Save</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>English</TableHead>
            <TableHead>Arabic</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statuses.map((status) => (
            <TableRow key={status.memberstatusid}>
              <TableCell>{status.memberstatusid}</TableCell>
              <TableCell>{status.memberstatusdescen}</TableCell>
              <TableCell>{status.memberstatusdescar}</TableCell>
              <TableCell className="text-right space-x-2">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditStatus(status);
                        setForm({
                          memberstatusdescen: status.memberstatusdescen,
                          memberstatusdescar: status.memberstatusdescar,
                        });
                        setDialogOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="space-y-4">
                    <DialogTitle className="font-semibold text-lg">
                      Edit Member Status
                    </DialogTitle>
                    <Input
                      placeholder="English Description"
                      value={form.memberstatusdescen}
                      onChange={(e) =>
                        setForm({ ...form, memberstatusdescen: e.target.value })
                      }
                    />
                    <Input
                      placeholder="Arabic Description"
                      value={form.memberstatusdescar}
                      onChange={(e) =>
                        setForm({ ...form, memberstatusdescar: e.target.value })
                      }
                    />
                    <Button onClick={handleSave}>Update</Button>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(status.memberstatusid)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
