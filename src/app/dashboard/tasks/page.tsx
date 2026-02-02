"use client";
import {Table, TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import { useState } from "react";
 import {Tabs,TabsList,TabsTrigger, TabsContent, } from "@/components/ui/tabs";

  function TasksPage() {
    const tasks = [
        {
            name: "Design-UI",
            description: "Dashboard",
            status: "In Progress",
            priority: "High",
        },
        {
            name: "Fix-Bug",
            description: "Website",
            status: "completed",
            priority: "Medium",
        },
        {
            name: "learn-react",
            description: "hooks",
            status: "In Progress",
            priority: "Low",
        },
       {
        name:"javascript",
        description: "basics",
        status: "completed",
        priority: "Low",
       }
    ]
    const [activeTab, setActiveTab] = useState("all");

    const filteredTasks = 
    activeTab === "all" 
    ? tasks
     : tasks.filter(task => task.status === activeTab);
    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-semibold mb-6">Tasks</h1>
  <Tabs defaultValue={activeTab} className="w-full">
  
    
          <TabsList className="mb-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}> All</TabsTrigger>
            <TabsTrigger value="completed" onClick={() => setActiveTab("completed")}>Completed</TabsTrigger>
            <TabsTrigger value="In Progress" onClick={() => setActiveTab("In Progress")}>In Progress</TabsTrigger>
          </TabsList>
  
      
<TabsContent value={activeTab}>
<div className="bg-gray-100 rounded-lg shadow-md border p-4">
<Table>
  
 <TableHeader>
<TableRow>
                   <TableHead>Task Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
</TableRow>
</TableHeader>
  
<TableBody>
    {filteredTasks.map((task) => (
        <TableRow key={task.name}>
        <TableCell>{task.name}</TableCell>
        <TableCell>{task.description}</TableCell>
        <TableCell>{task.status}</TableCell>
        <TableCell>{task.priority}</TableCell>
      </TableRow>))}
</TableBody>
  
</Table>
</div>
</TabsContent>
  
      
<TabsContent value="completed">
<p className="text-gray-500">Completed tasks will appear here</p>
 </TabsContent>
  
       
          <TabsContent value="progress">
            <p className="text-gray-500">In progress tasks will appear here</p>
          </TabsContent>
  
        </Tabs>
  
      </div>
    );
  }
  
  export default TasksPage;
  