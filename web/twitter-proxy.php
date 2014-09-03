<?php

	require_once( "TwitterAPIExchange.php" );

	$settings = array(
	    'oauth_access_token' => "384355102-zlJCRsXaryDkpGGGB0Vm9OGGXbpUNY0a1hMDZuMy",
	    'oauth_access_token_secret' => "aqOO0IkL8gTlJsQEnCafHTzZLG2f53zeeqFbDYec2Ct1M",
	    'consumer_key' => "UJFC4C8qi16SfaSHgKXcuh1Vb",
	    'consumer_secret' => "NZTr87AwvGb6sjs7NSJWFDf0biw68Qk0wUvstjFKdbqlHKm0o9"
	);

	$url = 'https://api.twitter.com/1.1/search/tweets.json';
	$requestMethod = 'GET';

	$getfield = '?q=test&geocode=37.781157,-122.398720,1mi&count=100";';

	$twitter = new TwitterAPIExchange($settings);
	$response =  $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();

	var_dump(json_decode($response));


?>