const fs = require('fs');
const path = require('path');

// Path to the error memory file
const ERROR_MEMORY_PATH = path.join(process.cwd(), 'src/utils/error-memory.json');

// Read the current error memory
function readMemory() {
  try {
    const data = fs.readFileSync(ERROR_MEMORY_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or has invalid JSON, return empty error memory
    return {
      errors: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

// Add the new error to memory
function addErrorToMemory() {
  const memory = readMemory();
  
  // Generate a new ID
  const id = `err-${String(memory.errors.length + 1).padStart(3, '0')}`;
  
  const newError = {
    id,
    description: "TanStack Router showing route path instead of component",
    context: "When navigating to a route in TanStack Router application, the page only shows the route path text (e.g. \"/_authenticated/chats/player-progress\") instead of rendering the actual component.",
    solution: "Verify the component has the correct order of Route export and component definition. Component should be defined before the Route export or include Route definition at the end of the file. Ensure the component is being properly passed to createFileRoute and is correctly implemented.",
    timestamp: new Date().toISOString()
  };
  
  memory.errors.push(newError);
  memory.lastUpdated = new Date().toISOString();
  
  // Save the updated memory
  fs.writeFileSync(ERROR_MEMORY_PATH, JSON.stringify(memory, null, 2), 'utf8');
  
  console.log(`Added new error with ID: ${id}`);
  return newError;
}

// Execute
addErrorToMemory(); 