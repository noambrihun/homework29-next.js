import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Select,SelectContent,SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

function SettingsPage() {
    return (
        <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <form className="space-y-4">
        <div>
        <label>Name</label>
        <Input placeholder="Enter your name" />
        </div>
        <br />
        <div>
        <label>Email</label>    
        <Input type="email" placeholder="Enter your email" />
        </div>
        <br />
        <div>
        <label>Theme</label>
        <Select>
        <SelectTrigger>
        <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        </SelectContent>
        </Select>
        </div>
        <br />
        <Button type="submit">Save Settings</Button>
        </form>
        </div>
    )
}

export default SettingsPage;