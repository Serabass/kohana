<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Main extends Controller {

	public function action_index()
	{
		$user = ORM::factory('User', 1);
		// var_dump($user);
		$this->response->body(View::factory('general'));
	}

}