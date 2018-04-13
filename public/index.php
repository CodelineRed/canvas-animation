<?php

// available templates
$templates = array(
);

$template = isset($_GET['t']) && in_array($_GET['t'], $templates) ? $_GET['t'] : 'home';

include __DIR__ . '/../templates/index.html';