<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Api_Wish extends Controller_Api {

	public function action_index()
	{
		$wishes = ORM::factory('Wish')->find_all();
		$this->response_json($wishes->as_array());
	}

}