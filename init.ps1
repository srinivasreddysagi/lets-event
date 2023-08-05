$workingDirectory = $PWD

# Define commands
$startClient = "npm run dev"
$startServer = "npm run start"

# Define Windows Terminal executable path
$wtPath = "wt.exe"

# Create a function to execute the commands in new tabs
function Start-NewTerminalTab {
    param([string]$WorkingDirectory, [string]$Command)
    Start-Process -FilePath $wtPath -ArgumentList "-d", $WorkingDirectory, "powershell.exe", "-NoExit", "-Command", $Command
}

# Execute commands in new tabs
Start-NewTerminalTab -WorkingDirectory (Join-Path $workingDirectory '\client') -Command $startClient
Start-NewTerminalTab -WorkingDirectory (Join-Path $workingDirectory '\server') -Command $startServer