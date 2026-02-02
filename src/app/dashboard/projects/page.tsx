"use client";

import { Table,TableBody, TableCell, TableHead, TableHeader,TableRow,} from "@/components/ui/table";

function ProjectsPage() {
return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-6">Projects</h1>

 <div className="bg-gray-100 rounded-lg border p-4">
  <Table>
  <TableHeader>
  <TableRow>
  <TableHead>Project Name</TableHead>
  <TableHead>Tasks Count</TableHead> 
  <TableHead>Status</TableHead>
  </TableRow>
  </TableHeader>

   <TableBody>
   <TableRow>
   <TableCell>Website</TableCell>
   <TableCell>5</TableCell>
    <TableCell>Active</TableCell>
    </TableRow>

    <TableRow>
    <TableCell>Mobile App</TableCell>
    <TableCell>2</TableCell>
    <TableCell>Completed</TableCell>
    </TableRow>

    <TableRow>
    <TableCell>AI Project</TableCell>
    <TableCell>3</TableCell>
    <TableCell>Active</TableCell>
    </TableRow>
    </TableBody>
    </Table>
    </div>
    </div>
  );
}

export default ProjectsPage;
