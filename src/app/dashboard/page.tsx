"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Table,TableBody, TableCell, TableHead,TableHeader,TableRow,} from "@/components/ui/table";


function DashboardPage() {
    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="flex flex-wrap gap-4">
        <Card className="w-[250px]">
        <CardHeader>
        <CardTitle>Total Tasks</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-3xl font-bold">0</p>
         </CardContent>
         </Card>

        <Card className="w-[250px]">
        <CardHeader>
        <CardTitle>Completed Tasks</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-3xl font-bold">0</p>
        </CardContent>
        </Card>

        <Card className="w-[250px]">
        <CardHeader>
        <CardTitle>In Progress Tasks</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-3xl font-bold">0</p>
        </CardContent>
        </Card>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">
       Recent Tasks
       </h2>

      <div className="bg-gray-100 rounded-lg border p-4">
      <Table>
      <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Priority</TableHead>
      </TableRow>
     </TableHeader>

     <TableBody>
     <TableRow>
        <TableCell>Learn React</TableCell>
        <TableCell>In Progress</TableCell>
        <TableCell>High</TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Build Dashboard</TableCell>
        <TableCell>Completed</TableCell>
        <TableCell>Medium</TableCell>
    </TableRow>
   </TableBody>
   </Table>
   </div>

        </div>
      );
    }      

export default DashboardPage; 