import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PopModal from "@/components/ui-components/popModal";
import { Form } from '../ui-components/form';

interface RequestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: number | null;
  children?: ReactNode;
}

const RequestFormModal: React.FC<RequestFormModalProps> = ({
  isOpen,
  onClose,
  serviceId,
  children
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { serviceId, ...formData });
    onClose();
  };

  return (
    <PopModal
      isOpen={isOpen}
      onClose={onClose}
      title="Service Request Form"
      showProfileImage={false}
    >
      <Form onSubmit={handleSubmit} className="space-y-4">

        <div>
            {children}
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-[#3bce8a] to-[#00a75a]"
          >
            Submit Request
          </Button>
        </div>
      </Form>
    </PopModal>
  );
};

export default RequestFormModal;