"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }
    router.refresh();
    router.push("/");
  };
  const startingTicketData = {
    title: "",
    description: "",
    priority: 0,
    category: "Hardware Problem",
    status: "not started",
    progress: 0,
  };
  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["category"] = ticket.category;
    startingTicketData["status"] = ticket.status;
    startingTicketData["progress"] = ticket.progress;
  }
  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2 "
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Edit your Ticket" : "Create your Ticket"}</h3>
        <label> Title</label>
        <input
          type="title"
          name="title"
          id="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label> Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label> Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem"> Hardware Problem</option>
          <option value="Software Problem"> Software Problem</option>
          <option value="Project"> Project</option>
        </select>
        <label> Priority</label>
        <div>
          <input
            type="radio"
            name="priority"
            id="priority-1 "
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            name="priority"
            id="priority-2 "
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            name="priority"
            id="priority-3 "
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            name="priority"
            id="priority-4 "
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            name="priority"
            id="priority-5 "
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          onChange={handleChange}
          min="0"
          max="100"
        />
        <label> Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          value={EDITMODE ? "Edit Ticket" : "Submit Ticket"}
          className="btn"
        />
      </form>
    </div>
  );
};

export default TicketForm;
