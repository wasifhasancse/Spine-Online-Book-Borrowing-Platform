"use client";
import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Surface, TextField, toast } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";

const UpdateProfile = () => {
  const [isSaving, setIsSaving] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const getUpdateData = Object.fromEntries(formData.entries());
    // if the user doesn't update any field, we shouldn't call the update API
    const updateInfo = {}
    if(getUpdateData.name) {
      updateInfo.name = getUpdateData.name
    }
    if(getUpdateData.image) {
      updateInfo.image = getUpdateData.image
    }
    await authClient.updateUser(updateInfo);
    setIsSaving(true);
    toast.success("Profile updated successfully");
    redirect("/profile");
  };
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-0">
      <Surface
        variant="default"
        className="rounded-3xl border border-[#9ac5ee] bg-[#f8fbff] p-5 shadow-xl shadow-[#1f5d9920] sm:p-7"
      >
        <div className="mb-6 border-b border-[#d6e9fb] pb-5">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#dceeff] text-[#1f5d99]">
            <PencilToSquare className="size-5" />
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#0f3d66]">
            Update Your Profile
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-[#1a4f80] sm:text-base">
            Refresh your details so your account information looks great across
            desktop, tablet, and mobile.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:gap-5">
          <TextField className="w-full" name="name" type="text">
            <Label className="text-[#0f3d66]">Full Name</Label>
            <Input
              placeholder="Enter your full name"
              className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
            />
          </TextField>

          <TextField className="w-full" name="image" type="url">
            <Label className="text-[#0f3d66]">Profile Image URL</Label>
            <Input
              placeholder="https://example.com/profile.jpg"
              className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
            />
          </TextField>

          <div className="rounded-xl border border-dashed border-[#c8e2fa] bg-[#f4faff] px-4 py-3 text-sm text-[#1a4f80]">
            Please use a public image URL for reliable rendering.
          </div>

          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              type="reset"
              variant="bordered"
              className="h-11 w-full rounded-xl border-[#1f5d99] bg-transparent font-semibold text-[#1f5d99] hover:bg-[#93c5fd33] hover:text-[#0f3d66] sm:w-auto"
            >
              Reset
            </Button>
            <Button
              type="submit"
              isDisabled={isSaving}
              className="h-11 w-full rounded-xl bg-[#1f5d99] font-bold text-[#eaf4ff] hover:bg-[#0f3d66] sm:w-auto"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Surface>
    </section>
  );
};

export default UpdateProfile;
