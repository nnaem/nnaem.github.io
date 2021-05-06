$allowedIps = ['79.191.104.189'];
$userIp = $_SERVER['REMOTE_ADDR'];

if (!in_array($userIp, $allowedIps)) {
    exit('Unauthorized');
}
<!DOCTYPE html>
<html>
    <head>
        <script src="./bundle.js"></script>
    </head>
    <body>
        <ul id="friendsOnline">

        </ul>
    </body>
</html>