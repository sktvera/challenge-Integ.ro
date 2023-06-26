<?php

$basket = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Divide the apples into boxes of 4 apples each
$boxes = array_chunk($basket, 4);

// Store the boxes in packages of 2 boxes each
$packages = array_chunk($boxes, 2);

$output = []; // Output array to store the final data

// Iterate through each package of boxes
foreach ($packages as $package) {
    $friendData = [
        "package" => [] // Array to store the friend's boxes
    ];

    // Iterate through each box in the package
    foreach ($package as $box) {
        $boxData = [
            "box" => $box // Box data
        ];

        // Add box data to the friend's package array
        $friendData["package"][] = $boxData;
    }

    // Add friend's package data to the output array
    $output[] = [
        "friend" => [$friendData]
    ];
}

// Convert the output array to JSON format with pretty print
$jsonOutput = json_encode($output, JSON_PRETTY_PRINT);

// Print the result to the output
echo $jsonOutput;

?>