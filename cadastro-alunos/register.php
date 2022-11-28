<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    function get_data() {
        $nome = $_POST['nome'];
        $file_name = 'AlunosCadastrados' . '.json';

        if(file_exists("$file_name")) {
            $current_data = file_get_contents("$file_name");
            $array_data = json_decode($current_data, true);

            $extra = array(
                'Nome' => $_POST['nome'],
                'RA' => $_POST['ra'],
                'Genero' => $_POST['genero'],
                'Idade' => $_POST['idade'],
                'Telefone' => $_POST['telefone'],
                'Endereco' => $_POST['endereco'],
                'Email' => $_POST['email']
            );
            $array_data[] = $extra;
            return json_encode($array_data);
        }
        else {
            $datae=array();
            $datae=array(
                'Nome' => $_POST['nome'],
                'RA' => $_POST['ra'],
                'Genero' => $_POST['genero'],
                'Idade' => $_POST['idade'],
                'Telefone' => $_POST['telefone'],
                'Endereco' => $_POST['endereco'],
                'Email' => $_POST['email']
            );
            return json_encode($datae);
        }
    }

    $file_name = 'AlunosCadastrados' . '.json';

    if(file_put_contents("$file_name", get_data())) {
        echo 'success';
    }

    else {
        echo 'There is some error';
    }
}

?>