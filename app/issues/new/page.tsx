"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="1" placeholder="Title" />
      <SimpleMDE placeholder="description" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
