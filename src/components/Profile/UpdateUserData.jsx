"use client";
import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const UpdateUserData = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const getUpdateData = Object.fromEntries(formData.entries());
    await authClient.updateUser({
    image: getUpdateData.image,
    name: getUpdateData.name,
})
  };
  return (
    <Modal>
      <Button
        variant="bordered"
        className="mt-5 h-11 w-full rounded-xl border-[#1f5d99] bg-transparent font-semibold text-[#1f5d99] transition hover:bg-[#93c5fd33] hover:text-[#0f3d66]"
      >
        <PencilToSquare className="size-4" />
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[calc(100vw-1.5rem)] max-w-lg rounded-3xl border border-[#9ac5ee] bg-[#f8fbff] shadow-2xl shadow-[#1f5d9920] sm:w-full">
            <Modal.CloseTrigger />
            <Modal.Header className="border-b border-[#d6e9fb] px-5 py-5 sm:px-6">
              <Modal.Icon className="bg-[#dceeff] text-[#1f5d99]">
               <PencilToSquare className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-[#0f3d66]">
                Update Your Profile
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-6 text-[#1a4f80]">
                Refresh your profile details so your library account looks clean and up to date on every device.
              </p>
            </Modal.Header>
            <Modal.Body className="px-5 py-5 sm:px-6 sm:py-6">
              <Surface variant="default" className="rounded-2xl border border-[#cfe4f8] bg-[#ffffffd9] p-4 sm:p-5" >
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label className="text-[#0f3d66]">Full Name</Label>
                    <Input placeholder="Enter your full name" className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label className="text-[#0f3d66]">Profile Image URL</Label>
                    <Input placeholder="https://example.com/profile.jpg" className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]" />
                  </TextField>
                  <div className="rounded-xl border border-dashed border-[#c8e2fa] bg-[#f4faff] px-4 py-3 text-sm text-[#1a4f80]">
                    Please use a public image URL from online
                  </div>
                  <Modal.Footer className="mt-2 flex flex-col gap-3 px-0 pb-0 pt-1 sm:flex-row sm:justify-end">
                    <Button slot="close" variant="secondary" className="h-11 w-full rounded-xl border-[#1f5d99] bg-transparent font-semibold text-[#1f5d99] hover:bg-[#93c5fd33] hover:text-[#0f3d66] sm:w-auto">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close" className="h-11 w-full rounded-xl bg-[#1f5d99] font-bold text-[#eaf4ff] hover:bg-[#0f3d66] sm:w-auto">Send Message</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateUserData;
