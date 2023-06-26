<?php

function expressionPalindrome($phrase) {
    // We convert the sentence to lower case and remove the blank spaces and punctuation marks
    $cleanedPhrase = preg_replace('/[^a-zA-Z0-9]/', '', strtolower($phrase));
    
    // We compare the original phrase with its reverse
    return $cleanedPhrase === strrev($cleanedPhrase);
}

// usage example
$phrase = "Anita lava la tina";
if (expressionPalindrome($phrase)) {
    echo "La frase '$phrase' es un palíndromo.";
} else {
    echo "La frase '$phrase' no es un palíndromo.";
}