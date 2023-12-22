<!DOCTYPE html>
<html>
<head>
  <title>Jogo de Cartas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
      color: #333;
    }
    
    .card {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      padding: 20px;
      margin-bottom: 20px;
    }
    
    .card-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .card-content {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    .result {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  
<div class="container">
    <h1>Jogo de Cartas</h1>
    
  
<?php

function getOpenAIResponse($apiKey, $userInput) {
  $url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
  $headers = array(
      'Content-Type: application/json',
      'Authorization: Bearer ' . $apiKey
  );
  $data = array(
      'prompt' => $userInput,
      'max_tokens' => 1200
  );

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
  $response = curl_exec($ch);
  curl_close($ch);

  $responseData = json_decode($response, true);
  return $responseData['choices'][0]['text'];
}

getOpenAIResponse('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', 'Crie um monstro com nome, ataque e defesa no formato:');

$cartas = [
    "monstro1" => [
        "nome" => "Dragão",
        "ataque" => 10,
        "defesa" => 8
    ],
    "monstro2" => [
        "nome" => "Gigante",
        "ataque" => 8,
        "defesa" => 10
    ],
    "monstro3" => [
        "nome" => "Unicórnio",
        "ataque" => 6,
        "defesa" => 6
    ],
    "monstro4" => [
        "nome" => "Mico leão dourado",
        "ataque" => 4,
        "defesa" => 4
    ],
    "monstro5" => [
      "nome" => "Fênix",
      "ataque" => 12,
      "defesa" => 6
    ],
    "monstro6" => [
      "nome" => "Kraken",
      "ataque" => 9,
      "defesa" => 11
    ],
    "monstro7" => [
      "nome" => "Espectro",
      "ataque" => 7,
      "defesa" => 9
    ],
    "monstro8" => [
      "nome" => "Grifo",
      "ataque" => 11,
      "defesa" => 7
    ],
    "monstro9" => [
      "nome" => "Cerberus",
      "ataque" => 10,
      "defesa" => 10
    ],
    "monstro10" => [
      "nome" => "Sereia",
      "ataque" => 5,
      "defesa" => 7
    ],
    "monstro11" => [
      "nome" => "Gólem",
      "ataque" => 8,
      "defesa" => 12
    ],
    "monstro12" => [
      "nome" => "Vampiro",
      "ataque" => 9,
      "defesa" => 5
    ],
    "monstro13" => [
      "nome" => "Yeti",
      "ataque" => 7,
      "defesa" => 11
    ],
    "monstro14" => [
      "nome" => "Harpia",
      "ataque" => 6,
      "defesa" => 8
    ]
];

function escolherMonstro($nomeMonstro, $cartas) {
    foreach ($cartas as $monstro) {
        if ($monstro["nome"] === $nomeMonstro) {
            return $monstro;
        }
    }
    return null;
}

function escolherMonstroAleatorio($cartas) {
    $monstros = array_values($cartas);
    $indiceAleatorio = rand(0, count($monstros) - 1);
    return $monstros[$indiceAleatorio];
}


echo '<form action="index.php" method="GET">
<label for="monstro">Escolha seu monstro:</label>
<select id="monstro" name="monstro">';

foreach ($cartas as $monstro) {
    echo '<option value="' . $monstro["nome"] . '">' . $monstro["nome"] . '</option>';
}

echo '</select>
<button type="submit">Jogar</button>
</form>';

$nomeMonstro = $_GET["monstro"];

$monstroEscolhido = escolherMonstro($nomeMonstro, $cartas);
$nomeMonstro = $monstroEscolhido["nome"];
$ataqueMonstro = $monstroEscolhido["ataque"];
$defesaMonstro = $monstroEscolhido["defesa"];


echo '<div class="card">
<h2 class="card-title">Seu monstro é:</h2>
<div class="card-content" id="seu-monstro"></div>
<div class="card-content" id="ataque-seu-monstro"></div>';
echo '<div id="seu-monstro">' . $nomeMonstro . '</div>';
echo '<div id="ataque-seu-monstro">Ataque: ' . $ataqueMonstro . ' Defesa: ' . $defesaMonstro . '</div>';
echo '</div>';

$monstroAleatorio = escolherMonstroAleatorio($cartas);
$nomeMonstroOponente = $monstroAleatorio["nome"];
$ataqueMonstroOponente = $monstroAleatorio["ataque"];
$defesaMonstroOponente = $monstroAleatorio["defesa"];

echo '<div class="card">
<h2 class="card-title">Monstro do oponente:</h2>';
echo '<div id="monstro-oponente">' . $nomeMonstroOponente . '</div>';
echo '<div id="ataque-monstro-oponente">Ataque: ' . $ataqueMonstroOponente . ' Defesa: ' . $defesaMonstroOponente . '</div>';
echo '</div>';
$resultado = "";

if ($ataqueMonstro == $defesaMonstroOponente) {
    $resultado = "Empate";
} else if ($ataqueMonstro > $defesaMonstroOponente) {
    $resultado = "Você Ganhou";
} else {
    $resultado = "Você Perdeu";
}
echo '<div class="result" id="resultado">'.$resultado.'</div>
</div> <!-- container -->';
?>
</body>
</html>
