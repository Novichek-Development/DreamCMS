<?php
define("API_GET", true);
include($_SERVER['DOCUMENT_ROOT'] . '/launcher/config.php');
if(!empty($_GET['redirect'])){
    if(!empty($links[$_GET['redirect']])){
        ?>
        <head>
            <script>
                window.location.replace("<?php echo $links[$_GET['redirect']]; ?>");
            </script>
        </head>
        <?php
    }
}
?>