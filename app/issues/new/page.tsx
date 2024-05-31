"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="1" placeholder="Title" />
      <TextArea placeholder="description" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
