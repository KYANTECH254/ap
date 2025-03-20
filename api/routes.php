<?php
header_remove("X-Powered-By");
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

/** Base URL */
$base_url = '/AP/';

/** API Route */
$api_route = 'api/req';

/** Full API URL */
$full_api_url = $base_url . ltrim(string: $api_route, characters: '/');

ini_set(option: 'display_errors', value: 1);
error_reporting(error_level: E_ALL);

/** Include functions */
include_once 'controller.php';

// Instantiate Operation object
$api = new Operation();

if ($_SERVER['REQUEST_URI'] == $full_api_url . '/') {
    echo "API fine";
    exit();
}
if ($_SERVER['REQUEST_URI'] == $full_api_url . '/saveBank') {
    $api->saveDataToJsonFile();
    exit();
}
if ($_SERVER['REQUEST_URI'] == $full_api_url . '/saveOrder') {
    $api->uploadOrder();
    exit();
}
if ($_SERVER['REQUEST_URI'] == $full_api_url . '/getOrders') {
    $api->fetchOrders();
    exit();
}
if ($_SERVER['REQUEST_URI'] == $full_api_url . '/getBanks') {
    $api->fetchBanks();
    exit();
}
