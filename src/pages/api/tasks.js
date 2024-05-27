// pages/api/tasks.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Get the new task data from the request body
        const newTask = req.body;

        // Read the current tasks from the JSON file
        const filePath = path.join(process.cwd(), 'src/app/data/tasks.json');
        const fileData = fs.readFileSync(filePath);
        const tasks = JSON.parse(fileData);

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Write the updated tasks array back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

        // Send a response
        res.status(200).json({ message: 'Task added successfully.' });
    } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
