<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class check
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(!Session()->has('login_Id')){
            return redirect()->route('login')->with('fail','you need to login');
        }
        return $next($request);
    }
}
