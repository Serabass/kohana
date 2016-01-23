<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Api extends Controller {

    public function response_json($json) {
		$this->response->body(json_encode($json));
    }

}