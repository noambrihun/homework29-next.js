"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function CreateTaskPage() {
  return (
<div className="max-w-md p-6">
<h1 className="text-2xl font-bold mb-6">Create Task</h1>
<form className="space-y-4">
<div>
<label>Task Name</label>
<Input placeholder="Enter task name" />
</div>
<div>
<label>Description</label>
<Textarea placeholder="Enter description" />
</div>
<div>
<label>Project</label>
<Select>
<SelectTrigger>
<SelectValue placeholder="Select project" />
</SelectTrigger>
<SelectContent>
<SelectItem value="website">Website</SelectItem>
<SelectItem value="mobile">Mobile App</SelectItem>
</SelectContent>
</Select>
</div>
<div>
<label>Status</label>
<Select>
<SelectTrigger>
<SelectValue placeholder="Select status" />
</SelectTrigger>
<SelectContent>
<SelectItem value="todo">Todo</SelectItem>
<SelectItem value="progress">In Progress</SelectItem>
<SelectItem value="completed">Completed</SelectItem>
</SelectContent>
</Select>
 </div>
  <div>
  <label>Priority</label>
  <Select>
  <SelectTrigger>
  <SelectValue placeholder="Select priority" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="low">Low</SelectItem>
  <SelectItem value="medium">Medium</SelectItem>
  <SelectItem value="high">High</SelectItem>
  </SelectContent>
  </Select>
  </div>

  <Button type="submit">Create Task</Button>

  </form>
  </div>
  );
}

export default CreateTaskPage;
