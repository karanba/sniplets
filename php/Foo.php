<?php
namespace Karanba\Sniplets;

class Foo
{
    public function doSomething()
    {
        $exception = new \Exception('My Exception');
        throw($exception);
    }
}
?>